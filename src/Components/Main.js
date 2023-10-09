import React from 'react'
import Project from './Project'
import '../css/style.css'
import { ImYoutube2 } from 'react-icons/im';
import Carousel from './Carousel';

const Main = () => {

    const emailHandler = (e) => {
        window.location = 'mailto:matthew.luk@yahoo.com'
    }

    const youtubeData = {
        "icon": <ImYoutube2 color='#fd7e14' size={48}/>,
        "github" : "https://github.com/Matthew-Luk/youtube",
        "link" : "https://ml-youtube.netlify.app",
        "title": "YouTube Clone",
        "content": "A YouTube clone that I created, there are some restrictions due to max call quota and you need your own Youtube Data API key.",
        "footer": ["React","YouTube Data API","CSS"]
    }

    return (
        <div className='main'>
            <div className='header'>
                <p>Hello, my name is</p>
                <p>Matthew Luk</p>
                <p>Building the future, one line of code at a time.</p>
                <p>Hello everyone, I am a software developer who is currently working in supply chain logistics 
                    through Milestone Technologies Inc. @ Uber Technologies Inc. while chasing a dream of having 
                    a career in software developing/engineering.
                </p>
            </div>
            <div className='about' id='about'>
                <p className='sectionHeader'><span>01.</span>About</p>
                <div className='aboutContent'>
                    <p>
                        Salutations! I'm Matthew Luk, a driven individual with a passion for software engineering and development. 
                        My journey into the world of coding began with solving practice problems on Edabit.com, a platform that 
                        ignited my curiosity and set the stage for my pursuit of excellence. Eager to formalize and deepen my 
                        skills, I took the plunge and enrolled in Coding Dojo in May 2022. Completing the rigorous course in 
                        November 2022 equipped me with a robust foundation in various programming languages and problem-solving 
                        strategies. Currently immersed in the dynamic realm of IT supply chain logistics at Uber through a 
                        contracted position, I am laying the groundwork for my future career in software. Beyond my professional 
                        pursuits, I find joy in coding, a skill I'm constantly honing to stay at the forefront of technological 
                        innovation. Engaging with the latest news articles, both tech-related and beyond, keeps me well-informed, 
                        while my commitment to fitness reflects my dedication to holistic well-being. Family plays a pivotal role 
                        in my life, and I cherish moments spent with my mom and brother. When not delving into lines of code, you 
                        can find me exploring the worlds crafted by filmmakers or seeking insights into the stock market and real 
                        estate. Eager to contribute my skills and passion to the ever-evolving landscape of software engineering, 
                        I am committed to pushing boundaries and crafting solutions that make a meaningful impact.
                    </p>
                </div>
            </div>
            <div className='projects' id='projects'>
                <p className='sectionHeader'><span>02.</span>Projects</p>
                <div className='projectsContent'>
                    <Project projectIcon={youtubeData["icon"]} projectGitHub={youtubeData["github"]} projectLink={youtubeData["link"]} projectTitle={youtubeData["title"]} projectContent={youtubeData["content"]} projectFooter={youtubeData["footer"]}/>
                </div>
            </div>
            <div className='experience' id='experience'>
                <p className='sectionHeader'><span>03.</span>Experience</p>
                <div className='experienceContent'>
                    <Carousel/>
                </div>
            </div>
            <div className='contact' id='contact'>
                <p className='sectionHeader'><span>04.</span>Contact</p>
                <div className='contactContent'>
                    <p>I am currently looking for work so please feel free to message me with any opportunities or just say hi!</p>
                    <button onClick={emailHandler} className='button'>Email</button>
                </div>
            </div>
            <div className='footer'>
                <p>Built by Matthew Luk and Design was heavily influenced by Brittany Chiang @ <span><a className='credit' href='https://brittanychiang.com'>https://brittanychiang.com</a></span></p>
            </div>
        </div>
    )
}

export default Main