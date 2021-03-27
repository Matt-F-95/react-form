import React, {useState} from 'react';
import NameForm from './NameForm';
import Thanks from './Thanks';
import About from './About';
import Legal from './Legal';
import Footer from './Footer';
import Form from './Form';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom"

function App() {
  const [namer, setNamer] = useState('');
  
  const handleChange = (e) => {
    console.log(e.target.value);
    setNamer(e.target.value);
    
  }

  return (
    <Router>
    <div className="App">
      <header class="container-fluid bg-gray-800">
        <div class="container mx-auto bg-gray-800 p-5">
          <nav class="flex flex-row md:justify-between">
      <Link to ="/"><img src="logo.png" alt=""></img></Link>
        <ul class="flex text-white pt-8">
          <li class="pr-5 hover:text-red-600">
            <Link to="/">Contest</Link>
          </li>
          <li class="pr-5 hover:text-red-600">
            <Link to="/about">Product</Link>
          </li>
          <li class="pr-5 hover:text-red-600">
            <Link to="/topics">Contact</Link>
          </li>
          <li class="pr-5 hover:text-red-600">
            <Link to="/legal">Legal</Link>
          </li>
        </ul>
      </nav>
      </div>
     
      </header>
      
  
      <h1>Here we go again</h1>

     
     
    <Switch>
      <Route exact path="/" children={<NameForm handleChange={(e)=>handleChange(e)} />} />
      <Route path="/thanks" children={<Thanks namer={namer} />} />
      <Route path="/about" component={About} />
      <Route path="/legal" component={Legal} />
      
    </Switch>
    <Form />
    <Footer />
    </div>
    </Router>
 
  
  
  );
}

export default App;
