import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
const Registration = () => {
 
  const [formData, setFormData] = useState({
    username: '',
    fathername:"",
    mothername:"",
    colroll:"",
    universityE:"",
    collegename:"",
    batch:"",
    branch:"",
    email: '',
    number: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (<div >
    <Header></Header><div
    style={{width:"90%",margin:"auto"}}>
    <div className='Rheader'>
      <h1 style={{textAlign:"center",marginBottom:"20px"}}>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div style={{display:"flex",justifyContent:"space-around"}} >
            <div style={{width:"40%"}}>
          <div >
            <p><label htmlFor="username">UserName</label></p>
            <input className='Rinput' 
              type="text"
              id="username" firstname
              name="username" placeholder='username'
              value={formData.username}
              onChange={handleInputChange}
              required
            
            />
          </div>
          <div >
            <p><label htmlFor="fathername">Father Name</label></p>
            <input className='Rinput'
              type="text"
              id="fathername" firstname
              name="fathername" placeholder='fathername'
              value={formData.fathername}
              onChange={handleInputChange}
              required
            />
          </div>
          <div >
            <p><label htmlFor="mothername">Mother Name</label></p>
            <input className='Rinput'
              type="text"
              id="mothername" firstname
              name="mothername" placeholder='mothername'
              value={formData.mothername}
              onChange={handleInputChange}
              required
            />
          </div>
          <div >
            <p><label htmlFor="colroll">College Roll No</label></p>
            <input className='Rinput'
              type="number"
              id="colroll" firstname
              name="colroll" placeholder='college roll'
              value={formData.colroll}
              onChange={handleInputChange}
              required
            />
          </div>
          <div >
            <p><label htmlFor="universityE">University Email</label></p>
            <input className='Rinput'
              type="email"
              id="universityE" firstname
              name="universityE" placeholder='university Email'
              value={formData.universityE}
              onChange={handleInputChange}
              required
            />
          </div>
          
          </div>
          <div style={{width:"40%"}}>
          <div >
            <p><label htmlFor="Collegename">College Name</label></p>
            <input className='Rinput'
              type="text"
              id="Collegename" firstname
              name="Collegename" placeholder='Collegename'
              value={formData.collegename}
              onChange={handleInputChange}
              required
            />
          </div>
          <div >
            <p><label htmlFor="batch">Batch</label></p>
            <input className='Rinput'
              type="text"
              id="batch" firstname
              name="batch" placeholder='batch'
              value={formData.batch}
              onChange={handleInputChange}
              required
            />
          </div>
          <div >
            <p><label htmlFor="branch">Branch</label></p>
            <input className='Rinput'
              type="text"
              id="branch" firstname
              name="branch" placeholder='branch'
              value={formData.branch}
              onChange={handleInputChange}
              required
            />
          </div>
          
        
        <div >
          <p><label htmlFor="email">Email</label></p>
          <input className='Rinput'
            type="email" firstname
            id="email"
            name="email" placeholder='email'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div >
          <p><label htmlFor="number">Phone Number</label></p>
          <input className='Rinput'
           type="tel"  pattern="[0-9]{10}" firstname
            id="number"
            name="number" placeholder='phone number'
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        </div>
        </div>
        <div style={{margin :"10px",textAlign:"center"}}>
        <button className='Rbutton' type="submit" >Register</button>
        <Link to="/alumni" > <button className='Rbutton' type="submit" > Already have Account
</button></Link></div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Registration;
