import React from 'react'
import logo from '../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  
    const navigate = useNavigate();

    return (
    <div className="navbar">
        {/* <img src={logo} alt="" widtth="130px"/> */}
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/resume'><li>Resume</li></NavLink>
            <NavLink to='/biography'><li>Biography</li></NavLink>
            <NavLink to='/research'><li>Research</li></NavLink>
            <NavLink to='/contact'><li>Contact</li></NavLink>
            <NavLink to='/tutorials'><li>Tutorials</li></NavLink>
            <NavLink to='/lectures'><li>Lecture Courses</li></NavLink>
            <NavLink to='/media'><li>Media</li></NavLink>
        </ul>
        <button onClick={()=> navigate('/contact')}>Contact Me!</button>
    </div>
  )
}

export default Navbar