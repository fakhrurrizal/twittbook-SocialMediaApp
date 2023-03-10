import React from 'react'
import Logo from '../../assets/logo.png'
import { UilSearch } from '@iconscout/react-unicons'


const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
        <img src={Logo} alt="" />

        <div className="Search">
            <input type="text" className="text" placeholder='#explore' />
            <div className="s-icon">
                <UilSearch />
            </div>
        </div>
    </div>
  )
}

export default LogoSearch