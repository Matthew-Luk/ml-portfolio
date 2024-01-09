import React from 'react'
import Project from './Project'
import '../css/style.css'
import { ImYoutube2 } from 'react-icons/im';
import portrait from '../images/portrait.jpg';
import Carousel from './Carousel';
import { Link } from 'react-router-dom'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { PiLockKeyFill } from "react-icons/pi";
import { TiWeatherCloudy } from "react-icons/ti";


const Main = () => {

    const emailHandler = () => {
        window.location = 'mailto:matthew.luk@yahoo.com'
    }

    const youtubeData = {
        "icon": <ImYoutube2 color='#fd7e14' size={"4.8rem"}/>,
        "github" : "https://github.com/Matthew-Luk/youtube",
        "link" : "https://ml-youtube.netlify.app",
        "title": "YouTube Clone",
        "content": "A YouTube clone that I created, there are some restrictions due to max call quota and you need your own Youtube Data API key.",
        "footer": ["React","YouTube Data API","CSS"]
    }

    const passwordData = {
        "icon": <PiLockKeyFill color='#fd7e14' size={"3.6rem"}/>,
        "github" : "https://github.com/Matthew-Luk/password_generator",
        "link" : "https://ml-passwordgenerator.netlify.app/",
        "title": "Password Generator",
        "content": "Random password generator, takes parameters or you can generate an Apple style strong password.",
        "footer": ["React","CSS"]
    }

    const weatherData = {
        "icon": <TiWeatherCloudy color='#fd7e14' size={"4rem"}/>,
        "github" : "https://github.com/Matthew-Luk/weather",
        "link" : "https://ml-weather.netlify.app/",
        "title": "Weather App",
        "content": "Weather app using an API from WeatherAPI.com, can take parameters such as city, zip code, or IP address.",
        "footer": ["React","SCSS","Weather API"]
    }

    return (
        <div className='main' id='main'>
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
                    <img src={portrait} className='portrait' alt="me in Hawaii" />
                </div>
            </div>
            <div className='projects' id='projects'>
                <p className='sectionHeader'><span>02.</span>Projects</p>
                <div className='projectsContent'>
                    <Project projectIcon={youtubeData["icon"]} projectGitHub={youtubeData["github"]} projectLink={youtubeData["link"]} projectTitle={youtubeData["title"]} projectContent={youtubeData["content"]} projectFooter={youtubeData["footer"]}/>
                    <Project projectIcon={passwordData["icon"]} projectGitHub={passwordData["github"]} projectLink={passwordData["link"]} projectTitle={passwordData["title"]} projectContent={passwordData["content"]} projectFooter={passwordData["footer"]}/>
                    <Project projectIcon={weatherData["icon"]} projectGitHub={weatherData["github"]} projectLink={weatherData["link"]} projectTitle={weatherData["title"]} projectContent={weatherData["content"]} projectFooter={weatherData["footer"]}/>
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
                    <div className='buttons'>
                        <Link className='linkButton' to='https://www.linkedin.com/in/matthew-luk95/' target='_blank'>
                            <BsLinkedin color='#fd7e14' size={"4.8rem"}/>
                        </Link>
                        <Link className='linkButton' to='https://github.com/Matthew-Luk' target='_blank'>
                            <BsGithub color='#fd7e14' size={"4.8rem"}/>
                        </Link>
                        <button onClick={emailHandler} className='button'>Email</button>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <p>Built by Matthew Luk and Design was heavily influenced by Brittany Chiang @ <span><a className='credit' href='https://brittanychiang.com' target="_blank" rel="noreferrer">https://brittanychiang.com</a></span></p>
            </div>
        </div>
    )
}

export default Main