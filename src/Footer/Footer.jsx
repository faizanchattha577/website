import React from 'react'
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faInstagram


// } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <>
            <footer>
          <div className="container">
              <div className="row">
                  <div className="col-12 col-lg-10 mx-auto">
                      <div className="row">
                          <div className="col-6 col-lg-3 ">
                           <h2>Company</h2>
                           <ul>
                               <li>
                                   <Link to="/Home"> Home</Link>
                               </li>
                               <li>
                                   <Link to="/About">About</Link>
                               </li>
                               <li>
                                   <Link to="/Services">Services</Link>
                               </li>
                               <li>
                                   <Link to="/Contact">Contact</Link>
                               </li>
                           </ul>
                          </div>
                          <div className="col-6 col-lg-3 ">
                           <h2>Support</h2>
                           <ul>
                               <li>
                                   <Link to="/Home"> Home</Link>
                               </li>
                               <li>
                                   <Link to="/About">About</Link>
                               </li>
                               <li>
                                   <Link to="/Services">Services</Link>
                               </li>
                               <li>
                                   <Link to="/Contact">Contact</Link>
                               </li>
                           </ul>
                          </div>
                          <div className="col-6 col-lg-3 ">
                           <h2>Services</h2>
                           <ul>
                               <li>
                                   <Link to="/Home"> Home</Link>
                               </li>
                               <li>
                                   <Link to="/About">About</Link>
                               </li>
                               <li>
                                   <Link to="/Services">Services</Link>
                               </li>
                               <li>
                                   <Link to="/Contact">Contact</Link>
                               </li>
                           </ul>
                          </div>
                          <div className="col-6 col-lg-3 ">
                           <h2>Follow Us</h2>
                               <div className="row">
                                 <div className="col-3 mx-auto">
                                     {/* <a href='/'>
                                      <i  className="fontAwesome"> <FontAwesomeIcon icon={faInstagram} /></i>
                                     </a> */}


                                 </div>
                               </div>
                          </div>


                      </div>


                  </div>


              </div>

          </div>

            </footer>
        </>
    )
}

export default Footer;
