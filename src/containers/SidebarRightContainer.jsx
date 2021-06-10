import React, { Component } from "react";
import {SidebarRight} from './../components';
import {trends, recomendations} from './../mocks';


class SidebarRightContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      trends: [],
      recomendations: [],
    };
  }
  componentDidMount(){
    this.setState({
      trends,
      recomendations,
    })
  }
  render(){
    return <SidebarRight trends={this.state.trends} recomendations={this.state.recomendations}/>
  }
}

export default SidebarRightContainer;

