import React from 'react'
import '../css/navbar.css'
import { TbSquareLetterM } from 'react-icons/tb';


const Navbar = () => {

    const resumeHandler = () => {
        window.location = "https://drive.google.com/file/d/1CSQXEqGwKEp8p1Uc-cvuU60xpYNKQ-_z/view?usp=sharing"
    }

    return (
        <div className='navbar'>
            <div className='navbarLeft'>
                <a href='#main'><TbSquareLetterM color='#fd7e14' size={54}/></a>
            </div>
            <div className='navbarRight'>
                <a href="#about" className='navbarLink'><span>01.</span>About</a>
                <a href="#projects" className='navbarLink'><span>02.</span>Projects</a>
                <a href="#experience" className='navbarLink'><span>03.</span>Experience</a>
                <a href="#contact" className='navbarLink'><span>04.</span>Contact</a>
                <button className='button' onClick={resumeHandler}>Resume</button>
            </div> 
        </div>
    )
}

export default Navbar