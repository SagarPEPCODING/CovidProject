import React from "react";
import './App.css';
import 'react-router-dom';
// import Content from './files/Content';
import { Route, Switch } from 'react-router-dom';
// import HeaderComponent from "./files/header";
import "./cssfiles/landingpagecontent.css";
import 'react-router-dom';
import LandingPage from './files/LandingPage';
import Solution from './files/solutionPage';
import Safety from './files/safetySuggestions';
import Pandemics from "./files/covid19Pandemics";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/solution" component={Solution}></Route>
        <Route path="/safety" component={Safety}></Route>
        <Route path="/pandemics" component={Pandemics}></Route>
        <Route path="/" component={LandingPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
