import React from 'react'
import { Link } from 'react-router-dom'
import { IComment } from '../../utils/TypeScript'

interface IProps {
  comment: IComment
}

const CommentList: React.FC<IProps> = ({ comment }) => {
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
        <small className="cursor-pointer">Reply to</small>
      </div>
    </div>
  )
}

export default CommentList
