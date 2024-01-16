import React from 'react'
import NewsEvent from './SubComponents/NewsEvent';
import About from './SubComponents/About';
import JobAlert from './SubComponents/JobAlert';
const Bottom = () => {
  return (
    <div className='Bottom'>
      <div className='NewsEvent'>
        <h3 style={{textAlign:"center"}}>News & Announcements</h3>
        <NewsEvent></NewsEvent>
        </div>
        <div className='AboutUs'><About></About></div>
        <div className='NewsEvent'>
        <h3 style={{textAlign:"center"}}>News & Announcements</h3>
        <JobAlert></JobAlert>
        </div>
    </div>
  )
}

export default Bottom
