import React, { Component } from "react";
import SidebarLeft from "./src/components/SidebarLeft.jsx";
import Feed from './src/components/Feed.jsx';
import SidebarRight from "./src/components/SidebarRight.jsx";


class App extends Component {
  render() {
    return <div className="wrapper">
      <SidebarLeft />
      <Feed />
      <SidebarRight />
    </div>
  }
}

export default App;