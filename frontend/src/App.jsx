import FrontPage from "./Pages/FrontPage";
import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from "react-router-dom";
import EventPage from "./Pages/Event/EventPage";
import JobFacilities from "./Pages/JobFacilities/JobFacilities";
import ContactPage from "./Pages/Contact/ContactPage";
import AboutUsPage from "./Pages/AboutUs/AboutUsPage";
import FacilitiesPage from "./Pages/Facilites/FacilitiesPage";
import Syllabus from "./Pages/Syllabus/Syllabus";
import FeeStructure from "./Pages/FeeStructure/FeeStructure";
import AdmissionProcess from "./Pages/AdmissionProcess/AdmissionProcess";
import Courses from "./Pages/Courses/Courses"
import AlumniPage from "./Pages/Alumni/AlumniPage";
import Registration from "./Pages/Alumni/Registration";
import Adminpage from "./Pages/Admin/Adminpage";
import Notificationpage from "./Pages/AboutUs/Notification/Notificationpage";
import VerifyPage from "./Pages/AboutUs/Verifypage/VerifyPage";
import ConfirmationPage from "./Pages/ConfirmationPage/ConfirmationPage";
function App() {
  return (
   <>
   <Router>
   <Routes> 
   <Route exact path="/" element={<FrontPage></FrontPage>}></Route>
   <Route exact path="/event" element={<EventPage/>}></Route>
   <Route exact path="/contact" element={<ContactPage/>}></Route>
   <Route exact path="/job" element={<JobFacilities/>}></Route>
   <Route exact path="/aboutus" element={<AboutUsPage/>}></Route>
   <Route exact path="/facility" element={<FacilitiesPage/>}></Route>
   <Route exact path="/academic/syllabus" element={<Syllabus/>}></Route>
   <Route exact path="/admission/fee" element={<FeeStructure/>}></Route>
   <Route exact path="/admission/process" element={<AdmissionProcess/>}></Route>
   <Route exact path="/admission/courses" element={<Courses/>}></Route>
   <Route exact path="/alumni" element={<AlumniPage/>}></Route>
   <Route exact path="/alumni/register" element={<Registration/>}></Route>
   <Route exact path="/ums" element={<Adminpage/>}></Route>
   <Route exact path="/not" element={<Notificationpage/>}></Route>
   <Route exact path="/not/verify" element={<VerifyPage/>}></Route>
   <Route exact path="/confirm" element={<ConfirmationPage/>}></Route>

    </Routes></Router>
   
   </>
  );
}

export default App;
