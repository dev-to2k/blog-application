import React, { useEffect, useState } from 'react'
import { IComment } from '../../utils/TypeScript'

import AvatarComment from './AvatarComment'
import CommentList from './CommentList'
import AvatarReply from './AvatarReply'

interface IProps {
  comment: IComment
}

const Comments: React.FC<IProps> = ({ comment }) => {
  const [showReply, setShowReply] = useState<IComment[]>([])

  useEffect(() => {
    if (!comment.replyCM) return
    setShowReply(comment.replyCM)
  }, [comment.replyCM])

  return (
    <div
      className="flex mb-6"
      style={{
        opacity: comment._id ? 1 : 0.5,
        pointerEvents: comment._id ? 'initial' : 'none',
      }}
    >
      <AvatarComment user={comment.user} />

      <CommentList
        comment={comment}
        showReply={showReply}
        setShowReply={setShowReply}
      >
        {showReply.map((comment, index) => (
          <div
            key={index}
            style={{
              opacity: comment._id ? 1 : 0.5,
              pointerEvents: comment._id ? 'initial' : 'none',
            }}
          >
            <AvatarReply user={comment.user} reply_user={comment.reply_user} />

            <CommentList
              comment={comment}
              showReply={showReply}
              setShowReply={setShowReply}
            />
          </div>
        ))}
      </CommentList>
    </div>
  )
}

export default Comments
