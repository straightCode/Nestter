import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {SidebarLeft} from "../components";
import MainFeed from './MainFeed.jsx';
import SidebarRightContainer from './SidebarRightContainer.jsx';


class Home extends Component {
  render() {
    return <div className="wrapper">
      <SidebarLeft />
      <MainFeed />
      <SidebarRightContainer />
    </div>
  }
}

export default Home;