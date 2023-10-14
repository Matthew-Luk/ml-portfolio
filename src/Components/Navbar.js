import React from 'react'
import '../css/navbar.css'
import { TbHexagonLetterM } from 'react-icons/tb';
import { TbSquareRoundedLetterM } from 'react-icons/tb';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbarLeft'>
                <a href='#'><TbHexagonLetterM color='#fd7e14' size={54}/></a>
                {/* <a href='#'><TbSquareRoundedLetterM color='#fd7e14' size={54}/></a> */}
            </div>
            <div className='navbarRight'>
                <a href="#about" className='navbarLink'><span>01.</span>About</a>
                <a href="#projects" className='navbarLink'><span>02.</span>Projects</a>
                <a href="#experience" className='navbarLink'><span>03.</span>Experience</a>
                <a href="#contact" className='navbarLink'><span>04.</span>Contact</a>
                <button className='button'>Resume</button>
            </div> 
        </div>
    )
}

export default Navbar