import React from 'react'
import Img from "../../Image/about.jpg"
import AboutDetail from './AboutDetail'
const AboutComponents = () => {
  return (
    <div>
      <div className='EventPage'>
        <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div ><h1 style={{marginLeft:"60px",color:"brown",fontWeight:"bold"}} >About Us</h1></div>
        <div><img src={Img}alt=""  style={{height:"250px",width:"70vw",borderTopLeftRadius:"500px"}}/></div>
      </div>
      <hr style={{border:"15px solid black"}}/>
      <div >
        <AboutDetail></AboutDetail>
      </div>
      </div>
    </div>
    </div>
  )
}

export default AboutComponents
