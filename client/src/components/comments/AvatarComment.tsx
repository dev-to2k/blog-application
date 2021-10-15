import React from 'react'
import { IUser } from '../../utils/TypeScript'

interface IProps {
  user: IUser
}

const AvatarComment: React.FC<IProps> = ({ user }) => {
  return (
    <div>
      <img
        className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
        src={user.avatar}
        alt="avatar"
      />
    </div>
  )
}

export default AvatarComment
