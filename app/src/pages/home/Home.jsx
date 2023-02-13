import React from 'react'
import PostSide from '../../components/Post/PostSide'
import ProfileSide from '../../components/ProfileBar/ProfileSide'
import RightSide from '../../components/Right/RightSide'

function Home() {
  return (
    <div className='Home'>
        <ProfileSide />
        <PostSide location="homePage" />
        <RightSide />
    </div>
  )
}

export default Home