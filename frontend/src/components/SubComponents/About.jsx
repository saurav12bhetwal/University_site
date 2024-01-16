import React from 'react'
import img from "../../Image/Aboutus.jpg"
const About = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h4>About Uttarakhand Technical University</h4>
      <div>
        <img src={img} alt="img" style={{height:"280px",marginBottom:"40px"}} />
      </div>
      <div><p>Veer Madho Singh Bhandari Uttarakhand Technical University, Dehradun was established on 27th January 2005 by Govt. of Uttarakhand through the Uttarakhand Technical University Act 2005. The Veer Madho Singh Bhandari Uttarakhand Technical University campus is situated at NH-72 Suddhowala, Dehradun.</p></div>
      <div><h5 style={{color:"blue"}}>Read More</h5> </div>
    </div>
  )
}

export default About
