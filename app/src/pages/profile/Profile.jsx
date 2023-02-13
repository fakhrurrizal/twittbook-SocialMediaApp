import React from 'react'
import PostSide from '../../components/Post/PostSide'
import ProfileLeft from '../../components/Profile/ProfileLeft'
import ProfileCard from '../../components/ProfileBar/ProfileCard'
import RightSide from '../../components/Right/RightSide'

const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft />
        <div className="Profile-center">
          <ProfileCard location="profilePage"/>
          <PostSide />
        </div>
        <RightSide />
    </div>
  )
}

export default Profile