import React from 'react'
import UserBlogs from '../../components/profile/UserBlogs'
import { IParams, RootStore } from '../../utils/TypeScript'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import UserInfo from '../../components/profile/UserInfo'
import OtherInfo from '../../components/profile/OtherInfo'

const Profile = () => {
  const { slug }: IParams = useParams()
  const { authReducer } = useSelector((state: RootStore) => state)

  return (
    <div className={`flex flex-col lg:flex-row bg-gray-100 rounded-lg py-3`}>
      <div className={`w-full lg:w-5/12 my-3 pr-3`}>
        {authReducer.user?._id === slug ? (
          <UserInfo />
        ) : (
          <OtherInfo id={slug} />
        )}
      </div>
      <div className={`w-full lg:w-7/12 my-3`}>
        <UserBlogs />
      </div>
    </div>
  )
}

export default Profile
