import React, { useState } from 'react'
import Home from '../../assets/home.png'
import {  UilSetting  } from '@iconscout/react-unicons'
import Noti from '../../assets/noti.png'
import Comment from '../../assets/comment.png'
import TrendCard from './TrendCard'
import ShareModal from '../Modal/ShareModal'
import { Link } from 'react-router-dom'

const RightSide = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="RightSide">
        <div className="navIcons">
            <Link to="../home">
              <img src={Home} alt="" />
            </Link>
            <UilSetting />
            <img src={Noti} alt="" />
            <Link to="../chat">
              <img src={Comment} alt="" />
            </Link>
        </div>
        <TrendCard />
        <button className="button r-button" onClick={()=>setShowModal(true)}>
          Share
        </button>
        <ShareModal showModal={showModal} setShowModal={setShowModal}/>
    </div>
  )
}

export default RightSide