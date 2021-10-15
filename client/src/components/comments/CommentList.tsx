import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { IComment, RootStore } from '../../utils/TypeScript'

import Input from './Input'

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
      comment_root: comment._id,
      createdAt: new Date().toISOString(),
    }
    console.log(data)
    setShowReply([...showReply, data])
    setOnReply(false)
  }
  return (
    <div>
      <Link
        to={`/profile/${comment.user._id}`}
        className="text-sm text-gray-700 hover:text-black uppercase mr-2"
      >
        {comment.user.name}
      </Link>
      <small> {new Date(comment.createdAt).toLocaleString()}</small>
      <div className="bg-gray-50 rounded-lg p-3 mt-2">
        <div
          className="mb-3"
          dangerouslySetInnerHTML={{
            __html: comment.content,
          }}
        />
        <small
          className="cursor-pointer text-indigo-500 font-semibold"
          onClick={() => setOnReply(!onReply)}
        >
          {onReply ? 'Cancel' : 'Reply to'}
        </small>
      </div>
      {onReply && <Input callback={handleReply} />}

      {children}
    </div>
  )
}

export default CommentList
