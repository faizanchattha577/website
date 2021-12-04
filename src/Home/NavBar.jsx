
import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <a class="navbar-brand"  href="/">
              Be Worker     
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/Home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/services/">
                    Services
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/About">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Contact">
                    Contact
                  </a>
                </li>
             
              </ul>
              <form class="d-flex">
               
               <Link to="/Login">
               <button  class="btn btn-primary style"  type="submit">
                  Log In
                </button>
               
               </Link>
                
                <Link to="/Signup">
                <button class="btn btn-danger style"  type="submit">
                  Sign Up
                </button>
                </Link>
               
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};
export default NavBar;
