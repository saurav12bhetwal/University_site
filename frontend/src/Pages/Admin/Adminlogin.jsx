import React, { useState } from 'react';

const Adminlogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    
  };

  return (
    <div style={{border:"1px solid black"}}>
        <div className='Login'>
      <h2 style={{textAlign:"center",fontWeight:"bold",color:"blue"}}>Admin Login</h2>
      <form onSubmit={handleLogin}>
       <div className='innerlogin'>
        <p style={{fontSize:"20px",fontWeight:"bold",color:"brown"}}><label htmlFor='username'> Username:</label></p>
          <input
            type="text"
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='input'
          />
        
        </div> 
        <div className='innerlogin'>
       <p style={{fontSize:"20px",fontWeight:"bold",color:"brown"}}> <label htmlFor="password">
          Password:</label></p>
          <input
            type="password"
            value={password}
            id='password'
            onChange={(e) => setPassword(e.target.value)}
            className='input'
          />
        
        </div>
        <button className='loginbutton' type="submit">Login</button>
      </form>
      </div>
    </div>
  );
};

export default Adminlogin;
