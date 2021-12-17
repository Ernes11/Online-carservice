import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./HomePage/Home";

import Services from "./Pages/Services";
import AboutUs from "./Pages/AboutUs";
import Booking from "./Pages/Booking";

function App() {
  return (
    <Router>
      <Link />
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Switch>
        <Route path="/services" exact component={Services} />
      </Switch>
      <Switch>
        <Route path="/aboutus" exact component={AboutUs} />
      </Switch>
      <Switch>
        <Route path="/contact" exact component={Booking} />
      </Switch>
    </Router>
  );
}

export default App;
