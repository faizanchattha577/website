import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import NavBar from './Home/NavBar'
import { Route, Switch, Redirect} from 'react-router-dom'
import Home from './Home/Home'
import MainService from './Services/MainService'
import About from './About/About'
import Contact from './Contact/Contact'
import Signup from './Signup/Signup'
// import Footer from './Footer/Footer'


export const App = () => {
  return (
    <>
       <div>
           <div>
          <NavBar/>

         
          <Switch>    
                        <Route exact path="/" component={Home} />
                       <Route exact path="/services" component={MainService} />
                       <Route exact path="/About" component={About} />
                       <Route exact path="/Contact" component={Contact} />
                       <Route exact path="/Signup" component={Signup} />
                       {/* <Redirect to="/"/> */}
          </Switch> 
          
             {/* <Footer/> */}
        </div>
        </div>
    </>
  )
}
export default App;