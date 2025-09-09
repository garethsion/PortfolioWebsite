import React from 'react'
import logo from '../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'

const ResonatorNavbar = () => {
  
    const navigate = useNavigate();

    return (
    <div className="resonator-navbar">
        <ul>
        <NavLink to="/resonators"><li>Page1 - Introduction</li></NavLink>
        {/* <NavLink to="/resonators-page2"><li>Page2 - Complex Analysis</li></NavLink> */}
        <NavLink to="/resonators-page2"><li>Page2 - Coplanar Waveguide</li></NavLink>
        <NavLink to="/resonators-page3"><li>Page3 - Transmission Line Analysis</li></NavLink>
        <NavLink to="/resonators-page4"><li>Page4 - Kinetic Inductance</li></NavLink>
        <NavLink to="/resonators-page5"><li>Page5 - Surface Impedance</li></NavLink>
        </ul>
    </div>
  )
}

export default ResonatorNavbar