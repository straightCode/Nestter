import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {SidebarLeft} from "../components";
import SidebarRightContainer from './SidebarRightContainer.jsx';


class Profile extends Component {
  render() {
    return <div className="wrapper">
      <SidebarLeft />
      <div>Profile</div>
      <SidebarRightContainer />
    </div>
  }
}

export default Profile;