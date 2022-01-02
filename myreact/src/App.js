// import logo from './logo.svg';
import React from "react";
import Sidebar from "./Components/Sidebar";

// import AddingUser from "./Components/AddingUser";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Users from "./Pages/Users";
import Roles from "./Pages/Roles";
import Permission from "./Pages/Permission";
import Home from "./Pages/Home";
// import Usersdata from "./Components/Usersdata";--1/1/22

// -------
// import AdduserForm from "./Components/AdduserForm";
// import Users from "./Components/Users";
// import Aboutpage from './Aboutpage';
// ------------------------------
// import './App.css';
// import Aboutpage from './Components/Aboutpage';
// import Contactpage from './Components/Contactpage';
// import Homepage from './Components/Homepage';
// import Navbar from './Components/Layout/Navbar';
// import Adduser from './Components/Users/Adduser';
// top is video part--
// import Parent from './Components/Parent';
// import Parentcomponent from './Components/Parentcomponent';
// import Dashboardpage from './Dashboardpage';
// import Homepage from './Homepage';




// ctrl+/--> symbol for comment in react js and uncomment also.

function App() {

  // const [users,setUsers]=useState([{"Id":1,"fname":"sai","lname":"ganesh",
  // "email":"gsai@gmail.com"},{"Id":2,"fname":"surya","lname":"sri",
  // "email":"suryasri@gmail.com"},{"userId":3,"fname":"sai","lname":"saranya",
  // "email":"saisaranya@gmail.com"}])
  // ,{useState}

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Sidebar/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/users" element={<Users/>}></Route>
          <Route path="/roles" element={<Roles/>}></Route>
          <Route path="/permissions" element={<Permission/>}></Route>
        </Routes>
        </Router>
          </div>
  );
}

export default App;

// we want to switch to another component we must use switch in react-router-dom
// we must use switch in between browserrouter opening tag and closing tag
// in route i mentioning a path and give component name to move on which component.
// in latest version switch method is replace in routes concept in react.
// usually we use a component called switch but now we're using something called Routes.
// we replace switch component with Routes.
// here Router will determine where the user can go.

/*-
<Router>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/home" element={<Homepage/>}></Route>
          <Route path="/about" element={<Aboutpage/>}></Route>
          <Route path="/contact" element={<Contactpage/>}></Route>
          <Route path='/users/add' element={<Adduser/>}></Route>
        </Routes>
      </Router>


----userdata and adduser data---
<Router>
        <Routes>
          <Route path="/" element={<Users users={users} setUsers={setUsers} />}></Route>
          <Route path="/adduser" element={<AdduserForm users={users} setusers={setUsers}/>}></Route>
        </Routes>
      </Router>


      



-*/