import React from "react";
import UserBlogs from "../../components/profile/UserBlogs";
import {IParams, RootStore} from "../../utils/TypeScript";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import UserInfo from "../../components/profile/UserInfo";
import OtherInfo from "../../components/profile/OtherInfo";

const Profile = () => {
  const {slug}: IParams = useParams();
  const {authReducer} = useSelector((state: RootStore) => state);

  return (
    <div className={`flex flex-col lg:flex-row`}>
      <div className={`w-full lg:w-5/12 my-3 pr-3`}>
        {authReducer.user?._id === slug ? <UserInfo/> : <OtherInfo/>}
      </div>
      <div className={`w-full lg:w-7/12 my-3 pl-3`}>
        <UserBlogs/>
      </div>
    </div>
  );
};

export default Profile;