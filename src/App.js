import React from 'react';

//import the header and the footer which will be present on every page
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

//import components for the router
import LandingPage from './screens/LandingPage/LandingPage'
import Search from './screens/Search/Search'
import About from './screens/About/About'
import Submit from './screens/Submit/Submit'
import Contact from './screens/Contact/Contact'
import Error from './screens/Error/Error'

//import styles common to multiple elements throughout the website
import './utils/styles/styles.css'
import './utils/styles/thumbnails.css'

//react-router -> librairy for routing
import {BrowserRouter, Route, Switch} from 'react-router-dom'


// import './services/server'

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