import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid ">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
      <li className="nav-item">
          <Link className="nav-link navbar-brand" to="/ums">UMS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active navbar-brand" aria-current="page" to="/alumni">Alumni</Link>
        </li>
        <li className="nav-item">
         <div className="dropdown">
  <a className="btn  dropdown-toggle navbar-brand" to="/academic" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Academic
  </a>

  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/academic/syllabus">Syllabus</Link></li>
    <li><Link className="dropdown-item" to="/academic">Model question Paper</Link></li>
    <li><Link className="dropdown-item" to="/academic">Academic Calender</Link></li>
  </ul>
</div>
          
        </li>
        <li className="nav-item">
        <div className="dropdown">
  <a className="btn  dropdown-toggle navbar-brand" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Admission
  </a>

  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/admission/courses">Courses</Link></li>
    <li><Link className="dropdown-item" to="/admission/fee">Fee Structure</Link></li>
    <li><Link className="dropdown-item" to="/admission/process">Admission process</Link></li>
  </ul>
</div>
        </li>
        <li className="nav-item">
          <Link className="nav-link navbar-brand" to="/event">Events</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link navbar-brand" to="/facility">Facilities</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link navbar-brand" to="/aboutus">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link navbar-brand" to="/job">Job Alert</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link navbar-brand" to="/contact">Contact Us</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
