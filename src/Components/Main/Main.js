import React from 'react'
import './Main.css';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitterSquare} from "react-icons/fa";








function Main() {
    return (
        
            <div className='container'>

                <div className="image">
                    <img  src="https://images.unsplash.com/photo-1447968954315-3f0c44f7313c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" height='inherit' width='inherit ' alt='book'/>
                </div>

                <div className="aside">
                        <div className='aside-contents'>
                            <h2>Lorem ipsum </h2>
                            <br/>
                            <h1>Lorem ipsum dolor sit amet</h1>
                            <br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                            
                        </div>
                        <div className='icon-tray'>
                            <i><FaFacebookF size='1.5em'/></i>
                            <i><FaInstagram size='1.5em'/></i>
                            <i><FaTwitterSquare size='1.5em'/></i>
                            <i><FaLinkedin size='1.5em'/></i>
                        </div>


            </div>
                </div>



              
        
    )
}

export default Main ;
