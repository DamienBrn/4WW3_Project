import React from 'react';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LandingPage from './screens/LandingPage/LandingPage'
import Search from './screens/Search/Search'
import About from './screens/About/About'

import Error from './components/Error/Error'
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'



function App() {
  return (
    <div className="App">

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      
      <BrowserRouter>
      
        <div>
          <Header/>
          
            <Switch>
              <Route path="/" component={LandingPage} exact/>
              <Route path="/search" component={Search}/>
              <Route path="/about" component={About}/>
              <Route component={Error}/>
            </Switch>
          
          <Footer/>
        </div>

      </BrowserRouter>  

    </div>
  );
}

export default App;
