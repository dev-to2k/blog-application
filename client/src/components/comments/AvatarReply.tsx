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
        className="hidden object-cover w-10 h-10 mr-3 rounded-full sm:block"
      />

      <div className="ms-1 flex flex-col gap-3">
        <small className="font-semibold">
          <Link to={`/profile/${user._id}`} style={{ textDecoration: 'none' }}>
            {user.name}
          </Link>
        </small>

        <small className="reply-text">
          Reply to{' '}
          <Link
            to={`/profile/${reply_user?._id}`}
            className="font-semibold text-indigo-500"
          >
            {reply_user?.name}
          </Link>
        </small>
      </div>
    </div>
  )
}

export default AvatarReply
