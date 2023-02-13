import React from 'react'
import FollowersCard from './FollowersCard'
import LogoSearch from './LogoSearch'
import ProfileCard from './ProfileCard'

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch />  
        <ProfileCard />
        <FollowersCard />
    </div>
  )
}

export default ProfileSide