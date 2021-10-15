import React from 'react'
import { Link } from 'react-router-dom'

import { IUser } from '../../utils/TypeScript'

interface IProps {
  user: IUser
  reply_user?: IUser
}
const AvatarReply: React.FC<IProps> = ({ user, reply_user }) => {
  return (
    <div className="avatar_reply flex my-3">
      <img
        src={user.avatar}
        alt="avatar"
        className="hidden object-cover w-10 h-10 mr-4 rounded-full sm:block"
      />

      <div className="ms-1">
        <small className="reply-text">
          Reply to{' '}
          <Link to={`/profile/${reply_user?._id}`}>{reply_user?.name}</Link>
        </small>
      </div>
    </div>
  )
}

export default AvatarReply
