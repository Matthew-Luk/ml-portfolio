import React, { useState } from 'react'
import '../css/navbar.css'
import { TbSquareLetterM } from 'react-icons/tb';
import { RiArrowDropDownFill } from 'react-icons/ri';

const Navbar = () => {
    const [open,setOpen] = useState(true)

    const dropdownClose = () => {
        if(open === false){
            setOpen(true)
        }else{
            setOpen(false)
        }
        console.log(open)
    }

    const resumeHandler = () => {
        window.open("https://drive.google.com/file/d/1CSQXEqGwKEp8p1Uc-cvuU60xpYNKQ-_z/view?usp=sharing", "_blank")
    }

    const scrollToTop = () => {
        window.scrollTo({top:-100, left: 0, behavior: "smooth"})
    }

    return (
        <div className='navbar'>
            <div className='navbarLeft'>
                <TbSquareLetterM color='#fd7e14' size={54} onClick={scrollToTop} style={{cursor:"pointer"}}/>
            </div>
            <div className='navbarRight'>
                <a href="#about" className='navbarLink'><span>01.</span>About</a>
                <a href="#projects" className='navbarLink'><span>02.</span>Projects</a>
                <a href="#experience" className='navbarLink'><span>03.</span>Experience</a>
                <a href="#contact" className='navbarLink'><span>04.</span>Contact</a>
                <button className='button' onClick={resumeHandler}>Resume</button>
            </div>
            <div class="dropdown">
                <button className="dropdownButton" onClick={dropdownClose}>Menu<RiArrowDropDownFill color='#fd7e14' size={24}/></button>
                {/* <div className="dropdownContent"> */}
                <div className={`dropdownContent ${open ? "noDisplay":"openDisplay"}`}>
                    <a href="#about" className='dropdownLink'><span>01.</span>About</a>
                    <a href="#projects" className='dropdownLink'><span>02.</span>Projects</a>
                    <a href="#experience" className='dropdownLink'><span>03.</span>Experience</a>
                    <a href="#contact" className='dropdownLink'><span>04.</span>Contact</a>
                    <a href="https://drive.google.com/file/d/1CSQXEqGwKEp8p1Uc-cvuU60xpYNKQ-_z/view" target="_blank" rel="noreferrer" className='dropdownLink'><span>05.</span>Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar