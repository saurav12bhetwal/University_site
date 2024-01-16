import "../App.css"
import React from 'react'
import Logo from "../Image/universityLogo.png"
const Header = () => {
  return (
    <>
      <div className='header'>
        <div ><img src={Logo} alt='logo'className="logo"/></div>
        <div style={{textAlign:"center",marginTop:"30px"}}><h2 style={{color:"blue"}}>Veer Madho Singh Bhandari Uttarakhand Technical University, Dehradun, India</h2>
        <h3>(Formerly Uttarakhand Technical University Established by Act No. 415/2005 by Uttarakhand Government)</h3></div>
      </div>
    </>
  )
}

export default Header
