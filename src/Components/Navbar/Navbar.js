import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <div className='heading-box'>
            <p className='heading'> Home of 100,000+<br/>books and podcasts</p>
            <br/>
            <p className='details' >Get the latest books and listen to the latest podcasts all in one place </p>
            <button className="button" role="button"> <a href="ahsjahs.com" className="button"> Get Started</a> </button>
        </div>
    )
}

export default Navbar