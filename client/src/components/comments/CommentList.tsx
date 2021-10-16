import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { IComment, RootStore } from '../../utils/TypeScript'

import Input from './Input'
import { replyComment } from '../../redux/actions/commentAction'

interface IProps {
  comment: IComment
  showReply: IComment[]
  setShowReply: (showReply: IComment[]) => void
}

const CommentList: React.FC<IProps> = ({
  children,
  comment,
  showReply,
  setShowReply,
}) => {
  const [onReply, setOnReply] = useState(false)
  const { authReducer } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()

  const handleReply = (body: string) => {
    if (!authReducer.user || !authReducer.access_token) return

    const data = {
      user: authReducer.user,
      blog_id: comment.blog_id,
      blog_user_id: comment.blog_user_id,
      content: body,
      reply_user: comment.user,
      comment_root: comment.comment_root || comment._id,
      createdAt: new Date().toISOString(),
    }

    setShowReply([data, ...showReply])
    dispatch(replyComment(data, authReducer.access_token))
    setOnReply(false)
  }
  return (
    <div>
      <div className="bg-gray-50 rounded-lg p-3 mt-2">
        <div
          className="mb-3"
          dangerouslySetInnerHTML={{
            __html: comment.content,
          }}
        />
        <small
          className="cursor-pointer text-indigo-500 font-semibold mr-3"
          onClick={() => setOnReply(!onReply)}
        >
          {onReply ? 'Cancel' : 'Reply to'}
        </small>
        <small> {new Date(comment.createdAt).toLocaleString()}</small>
      </div>
      {onReply && <Input callback={handleReply} />}

      {children}
    </div>
  )
}

export default CommentList
