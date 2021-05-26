import React, { Component } from "react";
import SidebarLeft from "./src/components/SidebarLeft.jsx";
import Feed from './src/components/Feed.jsx';
import SidebarRight from "./src/components/SidebarRight.jsx";
import {tweets, trends, recomendations} from './src/mocks';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tweets: [],
    }
  }
  comonentDidMount(){
    this.setState({
      tweets,
      trends,
      recomendations,
    })
  }
  render() {
    return <div className="wrapper">
      <SidebarLeft />
      <Feed tweets={tweets}/>
      <SidebarRight trends={trends} recomendations={recomendations}/>
    </div>
  }
}

export default App;