import React from 'react'
import { Link,useRouteMatch } from 'react-router-dom'

const ServiceNavBAr = () => {
  const {url } = useRouteMatch();
  console.log(url)
    return (
        <>   <div className="justifycontent-center">
             <section className="navbar-bg ">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
           
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
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to={`${url}Ac`}>
                   Ac
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Car">
                   Car
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Carpenter">
                   Carpenter
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Cleaning">
                    Cleaning
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Electrician">
                    Electrician
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Gyser">
                    Gyser
                  </a>
                </li>
             
                <li class="nav-item">
                  <a class="nav-link" href="/Painter">
                    Painter
                  </a>
                </li>
             
                <li class="nav-item">
                  <a class="nav-link" href="/Plumber">
                    Plumber
                  </a>
                </li>
             
              </ul>
            </div>
          </div>
        </nav>
      </section>
      </div>
        </>
    )
}

export default ServiceNavBAr
