import React from 'react'
import { IUser } from '../../utils/TypeScript'
import { Link } from 'react-router-dom'

interface IProps {
  user: IUser
}

const AvatarComment: React.FC<IProps> = ({ user }) => {
  return (
    <div className="mr-3">
      <img
        className="hidden object-cover w-10 h-10 mx-auto rounded-full sm:block"
        src={user.avatar}
        alt="avatar"
      />
      <small className="font-semibold block mt-2">
        <Link to={`/profile/${user._id}`}>{user.name}</Link>
      </small>
    </div>
  )
}

export default AvatarComment
