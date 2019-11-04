import React from 'react';

//import the header and the footer which will be present on every page
import Header from './frontend/components/Header/Header'
import Footer from './frontend/components/Footer/Footer'

//import components for the router
import LandingPage from './frontend/screens/LandingPage/LandingPage'
import Search from './frontend/screens/Search/Search'
import About from './frontend/screens/About/About'
import Submit from './frontend/screens/Submit/Submit'
import Contact from './frontend/screens/Contact/Contact'
import Error from './frontend/screens/Error/Error'

//import styles common to multiple elements throughout the website
import './frontend/utils/styles/styles.css'
import './frontend/utils/styles/thumbnails.css'

//react-router -> librairy for routing
import {BrowserRouter, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
        <div>
          <Header/>
          
            <Switch>
              <Route path="/" component={LandingPage} exact/>
              <Route path="/search" component={Search}/>
              <Route path="/submit" component={Submit}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route component={Error}/>
            </Switch>
          
          <Footer/>
        </div>

      </BrowserRouter>  

    </div>
  );
}

export default App;

//Do I really have to comment everything ? comon... you can see I know what I'm doing.
//2030