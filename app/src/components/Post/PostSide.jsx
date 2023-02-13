import React from 'react'
import Posts from './Posts'
import PostShare from './PostShare'

const PostSide = ({location}) => {
  return (
    <div className="PostSide">
      <PostShare />
      <Posts /> 
    </div>
  )
}

export default PostSide