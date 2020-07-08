import React from 'react';
<<<<<<< HEAD
import CameraComponent from './components/camera';
import NotFoundPage from './components/notFoundPage';
import NavBar from './components/navBar'
import Home from './components/home';
import Instructions from './components/Instructions'
=======
import NotFoundPage from './components/NotFoundPage';
import CameraComponent from './components/CameraComponent';
import Instructions from './components/Instructions';

import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
>>>>>>> 6e043d375010235c660ce5726ff50b5fc69cd6df


import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (

    <BrowserRouter>
<<<<<<< HEAD
      <div className="heading">
        <div className="decor">.</div>
        <h1>Headshot Application</h1>
      </div>
      <br />
      <br />
      <Switch>
        <Route path="/" exact component={CameraComponent} />
        <Route path="/instructions" exact component={Home} />
        <Route path="/*" component={NotFoundPage} />
      </Switch>
      <Footer />
=======
      <div id="backsplash-wrapper">
        <div id="backsplash">
          <div>
            <img id="logo" src="/img/talentpath.png" alt="Talent Path Logo"/>
            <h1 id="headshot-title">HEADSHOTS</h1>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/" exact component={CameraComponent} />
        <Route path="/*" component={NotFoundPage} />
      </Switch>
>>>>>>> 6e043d375010235c660ce5726ff50b5fc69cd6df
      <Instructions />
    </BrowserRouter>
  );
}
export default App;