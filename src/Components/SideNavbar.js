import React from 'react'
import '../css/navbar.css'
import { Link } from 'react-router-dom'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';


const SideNavbar = () => {

    const emailHandler = (e) => {
        window.location = 'mailto:matthew.luk@yahoo.com'
    }

    return (
        <div className='sideNavbar'>
            <Link to='https://www.linkedin.com/in/matthew-luk95/'>
                <BsLinkedin color='#fd7e14' size={32}/>
            </Link>
            <Link to='https://github.com/Matthew-Luk'>
                <BsGithub color='#fd7e14' size={32}/>
            </Link>
            <Link onClick={emailHandler}>
                <SiGmail color='#fd7e14' size={32}/>
            </Link>
        </div>
    )
}

export default SideNavbar