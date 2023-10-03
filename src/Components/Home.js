import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import SideNavbar from './SideNavbar'
import '../css/style.css'

const Home = () => {
    return (
        <div className='container'>
            <Navbar/>
            <Main/>
            <SideNavbar/>
        </div>
    )
}

export default Home