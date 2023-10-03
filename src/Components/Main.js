import React from 'react'
import '../css/style.css'

const Main = () => {
    return (
        <div className='main'>
            <div className='header'>
                <p>Hello, my name is</p>
                <p>Matthew Luk.</p>
                <p>Building the future, one line of code at a time.</p>
                <p>Hello everyone, I am a software developer who is currently working in supply chain logistics 
                    through Milestone Technologies Inc. @ Uber Technologies Inc. while chasing a dream of having 
                    a career in software developing/engineering.
                </p>
            </div>
            <div className='about' id='about'>
                <p className='sectionHeader'><span>01.</span>About</p>
            </div>
            <div className='projects' id='projects'>
                <p className='sectionHeader'><span>02.</span>Projects</p>
            </div>
            <div className='experience' id='experience'>
                <p className='sectionHeader'><span>03.</span>Experience</p>
            </div>
            <div className='contact' id='contact'>
                <p className='sectionHeader'><span>04.</span>Contact</p>
                <div className='contactContent'>
                    <p>I am currently looking for work so please feel free to message me with any opportunities or just say hi!</p>
                    <button className='button'>Email</button>
                </div>
            </div>
        </div>
    )
}

export default Main