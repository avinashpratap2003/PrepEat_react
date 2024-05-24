import { useState, useEffect, useRef } from 'react';
import useRipple from 'use-ripple-hook';
import './nav.css';
import Navlogo from '../../assets/landingPage/logoMain.png';
import {NavLink} from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa"
const Navbar=()=>{
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [ripple1, event1] = useRipple({duration:2000});
    const [ripple2, event2] = useRipple({duration:2000});

    let menuRef = useRef();
    useEffect(()=>{
        let handler=(e)=>{
            if(!menuRef.current.contains(e.target)){
                setClick(false);
            }
        };
        document.addEventListener('mousedown',handler);
        return()=>{
            document.removeEventListener('mousedown',handler);
        }
    })

    return(
        <div className="navContainer">
            <div className="navContent" ref={menuRef}>
                <div className="navLeft">
                    <NavLink to='/'><img src={Navlogo} alt="Img" /></NavLink>
                </div>
                <div className="navMiddle">
                    <ul className={click?"nav-menu active":"nav-menu"}>
                        <li onClick={()=>{setClick(false)}}><NavLink to="/tiffin">Tiffin Service</NavLink></li>
                        <li onClick={()=>{setClick(false)}}><NavLink to="/chef">Chef Service</NavLink></li>
                        <li onClick={()=>{setClick(false)}}><NavLink to="/laundry">Laundry Service</NavLink></li>
                        <li onClick={()=>{setClick(false)}}><NavLink to="/homemaker">Homemaker Service</NavLink></li>
                        <li onClick={()=>{setClick(false)}}><NavLink to="/pricing">Pricing</NavLink></li>
                    </ul>
                </div>
                <div className="navRight">
                    <button ref={ripple1} onMouseDown={event1} className='navBtn1'>Sign UP</button>
                    <button ref={ripple2} onMouseDown={event2} className='navBtn2'>Log In</button>
                </div>
                <div className='humburger' onClick={handleClick}>
                    {click ?(<FaTimes size={20} style={{color:"black"}}/>):(<FaBars size={20} style={{color:"black"}}/>)}
                </div>
            </div>
        </div>
    )
}

export default Navbar;