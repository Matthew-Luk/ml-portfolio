import React, { useState } from 'react'
import '../css/carousel.css'
import warby from '../images/warbyparker2.jpg'
import lenscrafters from '../images/lenscrafters.JPG'
import samsonite from '../images/samsonite.jpeg'
import {BsFillCaretLeftFill} from 'react-icons/bs'
import {BsFillCaretRightFill} from 'react-icons/bs'

const Carousel = () => {
    const Uber = {
        "title": "Milestone Technologies Inc. @ Uber Inc.",
        "description": "I manage replacements and new hire asset requests, along with assisting with the asset retrieval logistics process. This involved meticulous asset management, ensuring the timely fulfillment of requests, and following up promptly with terminated users. All while adhering to strict Service Level Agreements (SLAs) and Key Performance Indicators (KPIs).",
        "position": "IT Supply Chain Technician",
        "date": "Jan 2022 - Present",
        "picture": ""
    }

    const Facebook = {
        "title": "Milestone Technologies Inc./ Astreya Partners @ Facebook, Inc.",
        "description": "As an IT Flex Technician at Facebook/Meta, I had a versatile role covering several departments. This gave me insights into each department's tasks, allowing me to offer help to meet deadlines and uphold Service Level Agreements (SLAs). I handled tasks such as setting up and troubleshooting devices, shipping assets globally, managing inventory, and supporting new hire orientation classes.",
        "position": "IT Flex Technician",
        "date": "Oct 2019 - Jan 2022",
        "picture": ""
    }

    const Warby = {
        "title": "Warby Parker",
        "description": "Collaborated closely with optical team to provide quality service. I specialized in repairing glasses, assisting with measurements, and troubleshooting issues for customers. My role also involved handling insurance processes and managing clerical tasks like inputting data for orders.",
        "position": "Licensed Optician",
        "date": "Mar 2019 - Oct 2019",
        "picture": warby
    }

    const LensCrafters = {
        "title": "LensCrafters",
        "description": "I worked with an optometrist to make sure everything ran smoothly. I scheduled eye exams, helped with pre-exam tasks, and quickly resolved any issues with people's glasses. I also provided great customer service by addressing questions and giving personalized attention.",
        "position": "Licensed Optician",
        "date": "Jan 2018 - Mar 2019",
        "picture": lenscrafters
    }

    const Samsonite = {
        "title": "Samsonite",
        "description": "I was responsible for ensuring a positive shopping experience. I provided great customer service, managed money and operated the POS system.",
        "position": "Retail associate/Key holder",
        "date": "2014 - 2018",
        "picture": samsonite
    }

    const data = [Uber,Facebook,Warby,LensCrafters,Samsonite]
    const [currentIndex, setCurrentIndex] = useState(0)


    const left = () => {
        if(currentIndex < 1) {
            return setCurrentIndex(data.length-1)
        }
        return setCurrentIndex(currentIndex-1)
    }

    const right = () => {
        if(currentIndex === data.length-1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex+1)
    }

    return (
        <div className='carouselContainer'>
            <div className='carousel'>
                {
                    data.map((item,index) => {
                        return (
                            <div className='carouselItem' style={{transform: `translate(-${currentIndex * 100}%)`}}key={index}>
                                <div className='carouselLeft'>
                                    <p className='carouselTitle'>{item["title"]}</p>
                                    <p className='carouselDate'>{item["date"]}</p>
                                    <p className='carouselPosition'>{item["position"]}</p>
                                    <p className='carouselDescription'>{item["description"]}</p>
                                </div>
                                <img src={item["picture"]} alt="" />
                            </div>
                        )
                    })
                }
            </div>
            <div className='carouselButtons'>
                <BsFillCaretLeftFill className='carouselButton' onClick={left} size={54}/>
                <BsFillCaretRightFill className='carouselButton' onClick={right} size={54}/>
            </div>
        </div>
    )
}

export default Carousel