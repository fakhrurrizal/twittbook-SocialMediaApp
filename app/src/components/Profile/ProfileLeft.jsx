import React from 'react'
import LogoSearch from '../ProfileBar/LogoSearch'
import FollowersCard from '../ProfileBar/FollowersCard'
import InfoCard from './InfoCard'

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  )
}

export default ProfileLeft