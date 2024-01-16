import React from 'react'
import Header from '../../../components/Header'
import NotificationDisplay from './NotificationDisplay'
const Notificationpage = () => {
  return (
    <div>
      <Header></Header>
      <div className='innernotify'>
      <NotificationDisplay></NotificationDisplay>
      </div>
    </div>
  )
}

export default Notificationpage
