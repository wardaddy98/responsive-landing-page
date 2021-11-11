import React from 'react'
import './Header.css';
import { FaBars, FaSistrix} from "react-icons/fa";

export default function Header() {

    return (
        <div>
            <header className='navbar'>
                <i className='hamburger'><FaBars size='1.5em'/></i>
                <h1 className='box-1'>BookPod.</h1>
                <div className='box-2'>
                    <a href='https://publicinkoop.s3.amazonaws.com/hiring/Landing+-+Macbook.png'>Home</a>
                    <a href='https://publicinkoop.s3.amazonaws.com/hiring/Landing+-+Macbook.png'>Categories</a>
                    <a href='https://publicinkoop.s3.amazonaws.com/hiring/Landing+-+Macbook.png'>Podcasts</a>
                </div>

                <div className='box-3-searchbar'>
                    <i><FaSistrix size ='1.8em'/></i>
                    <input  type= 'text' placeholder='Search...'/>
                </div>
                
            </header>
        </div>
    )
}
