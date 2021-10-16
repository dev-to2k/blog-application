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
  const [next, setNext] = useState(2)

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
        {showReply.slice(0, next).map((comment, index) => (
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
        <div className="cursor-pointer">
          {showReply.length - next > 0 ? (
            <small
              style={{ color: 'crimson' }}
              onClick={() => setNext(next + 5)}
            >
              See more comments...
            </small>
          ) : (
            showReply.length > 2 && (
              <small style={{ color: 'teal' }} onClick={() => setNext(2)}>
                Hide comments...
              </small>
            )
          )}
        </div>
      </CommentList>
    </div>
  )
}

export default Comments
