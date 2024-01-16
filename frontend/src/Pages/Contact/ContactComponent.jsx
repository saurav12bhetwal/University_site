import React from 'react'
import ContactDeetail from './ContactDeetail'
import Img from "../../Image/job.jpg"
const ContactComponent = () => {
  return (
    <div> 
      <div className='EventPage'>
        <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div ><h1 style={{marginLeft:"60px",color:"brown",fontWeight:"bold"}} >Contact</h1></div>
        <div><img src={Img}alt=""  style={{height:"250px",width:"70vw",borderTopLeftRadius:"500px"}}/></div>
      </div>
      <hr style={{border:"15px solid black"}}/>
      <div >
       <ContactDeetail></ContactDeetail>
      </div>
      </div>
    </div>
    </div>
  )
}

export default ContactComponent
