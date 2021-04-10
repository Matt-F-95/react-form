// import React, {useState} from 'react';
// import NameForm from './NameForm';
// import Thanks from './Thanks';
import Legal from './Legal';
import Footer from './Footer';
import Form from './FormInputs';
import Contact from './Contact';
import PhotoBooth from './PhotoBooth';
import Home from './Home';
import About from './About';
import Logo from './images/logo.png';
import BurgerIcon from './images/menu.svg';
import React, { useState } from 'react';
// import MemberList from './Components/MemberList';
// import MemberInput from './Components/MemberInput';



import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom"



function App() {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = (e) => {
    setIsToggle(true)
    // console.error('clicked')
    // if (isToggle === true) {
    //   alert('true');
    // } else {
    //   alert('false')
    // }
    
  }
  

  return (
    <Router basename={'/'}>
    <div className="App">
      <header class="container-fluid bg-gray-800">
        <div class="container mx-auto bg-gray-800 p-5">
          <nav class="flex flex-row md:justify-between">

      <Link to ={`${process.env.PUBLIC_URL}/`}><img src={Logo} alt=""></img></Link>  
      <p id="hamburgerbtn" onClick={handleToggle} className="md:hidden">
             <img className="pl-5" src={BurgerIcon} width="54" alt="Navigation Hamburger Menu"></img>
             {/* <img src={Logo} alt=""></img> */}
           </p>
          
        <ul className={isToggle ? "active text-white pt-8" : "flex text-white pt-8 hidden md:flex md:flex-row"} id="mobileMenu">
        
          <li class="pr-5 hover:text-red-600">
            <Link to={`${process.env.PUBLIC_URL}/form`}>Contest</Link>
          </li>
          {
            // Photobooth link is only there for development purposes, and will be commented out on live build. You should only access photobooth through
            //A Successful Form Submission.
          }
          {/* <li class="pr-5 hover:text-red-600">
            <Link to={`${process.env.PUBLIC_URL}/photobooth`}>Photobooth</Link>
          </li> */}
          <li class="pr-5 hover:text-red-600">
            <Link to={`${process.env.PUBLIC_URL}/about`}>About</Link>
          </li>
          <li class="pr-5 hover:text-red-600">
            <Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link>
          </li>
          <li class="pr-5 hover:text-red-600">
            <Link to={`${process.env.PUBLIC_URL}/legal`}>Legal</Link>
          </li>
          <li class="pr-5 hover:text-red-600">
         
          </li>
        </ul>
      </nav>
      </div>
          
      </header>
      {/* <MemberList />
      <MemberInput /> */}

 
    
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
      {/* <Route path="/thanks" children={<Thanks namer={namer} />} /> */}
      <Route path={`${process.env.PUBLIC_URL}/legal`} component={Legal} />
      <Route path={`${process.env.PUBLIC_URL}/form`} component={Form} />
      <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
      <Route path={`${process.env.PUBLIC_URL}/photobooth`} component={PhotoBooth} />
      <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
      {/* <Route path="/home" component={Home} /> */}
      
    </Switch>
    
    <Footer />
          
    </div>
  
    </Router>
 
  
  
  );
}

export default App;
