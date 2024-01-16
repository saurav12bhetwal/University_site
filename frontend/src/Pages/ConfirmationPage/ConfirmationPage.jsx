import React from 'react'
import Header from '../../components/Header'
const ConfirmationPage = () => {
  return (
    <div>
      <Header></Header>
      <div className='confirm'>
        <div style={{textAlign:'center'}}><h2>Detail about User Valid  or not according to its data on database</h2>
        <div>
            <button className='confirmb'>Verify</button>
            <button className='confirmb'>Reject</button>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default ConfirmationPage
