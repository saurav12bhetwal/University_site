import React from 'react'
import img1 from "../../Image/Aboutus.jpg"
import img2 from "../../Image/about.jpg"
const FacilitesDetail = () => {
  return (
    <div className='outerFacility'>
      <div className='innerFacility'>
        <div className='div1'><img src={img1} alt="" /></div>
      <div><h2 style={{color:"green"}}><strong>Main Building</strong></h2>
       <p>The main building of the University has administrative offices namely Vice Chancellor Secretariat, Registrar Office, Finance Controller Office, Controller of Examination Office, Establishment Section, Research Section, Accounts Section, Store, Confidential Section, Degree / Migration Section, etc.</p>
       </div> 
      </div>
      <div className='innerFacility'>
       
      <div><h2 style={{color:"green"}}><strong>Auditorium</strong></h2>
       <p>University has a well equipped Auditorium with Video Wall and complete audio-video set up for a seating capacity of 240 in its premises.

</p>
       </div>
       <div className='div2'><img src={img2} alt="" /></div> 
      </div>
      <div className='innerFacility'>
      <div className='div1'><img src={img2} alt="" /></div> 
       <div><h2 style={{color:"green"}}><strong>Conference Hall</strong></h2>
        <p>University has two meeting rooms namely Pandit Narain Dutt Tiwari Conference Hall with seating capacity of 50 persons and a Board Room with seating capacity of 15 persons facility for online meeting.</p>
        </div>
       </div>
    </div>
  )
}

export default FacilitesDetail
