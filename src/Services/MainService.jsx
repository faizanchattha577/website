import React from "react";
import Services from "./Services";
import ServiceNavBAr from "./ServiceNavBAr";
import { Route, Switch, Redirect,useRouteMatch} from 'react-router-dom'
import Ac from "./AC/Ac";
import Car from "./Car/Car";
import Carpenter from "./Carpenter/Carpenter";
import Electrician from "./Electrician/Electrician";
import Cleaning from "./Cleaning/Cleaning";
import Gyser from "./Gyser/Gyser";
import Painter from "./Painter/Painter";
import Plumber from "./Plumber/Plumber";

const MainService = () => {
  let { path, url } = useRouteMatch();
  const path1 = `${path}/ac`
  console.log(path1)
  return (
    <div>
      <Services />
      <div>
        <ServiceNavBAr />
      </div>
      <Switch>    
        {/* <Route path={path} exact>
          <p>Fazi cake</p>
        </Route> */}
                   <Route exact path={`${path}/ac`}><p>Ac</p></Route>
                       {/* <Route exact path="/Car" component={Car} />
                       <Route exact path="/Carpenter" component={Carpenter} />
                       <Route exact path="/Cleaning" component={Cleaning} />
                       <Route exact path="/Electrician" component={Electrician} />
                       <Route exact path="/Gyser" component={Gyser} />
                       <Route exact path="/Painter" component={Painter} />
                       <Route exact path="/Plumber" component={Plumber} />
                       <Redirect to="/services"/> */}
          </Switch> 
    </div>
  );
};

export default MainService;
