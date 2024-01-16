import React from 'react'
import Img from "../../Image/events.jpg"
import EventDetail from './EventDetail'
const EventComponent = () => {
  return (
    <div className='EventPage'>
        <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div ><h1 style={{marginLeft:"60px",color:"brown",fontWeight:"bold"}} >Events</h1></div>
        <div><img src={Img}alt=""  style={{height:"250px",width:"70vw",borderTopLeftRadius:"500px"}}/></div>
      </div>
      <hr style={{border:"15px solid black"}}/>
      <div style={{margin:"50px",marginBottom:"0px"}}>
       <EventDetail></EventDetail>
      </div>
      </div>
    </div>
  )
}

export default EventComponent
