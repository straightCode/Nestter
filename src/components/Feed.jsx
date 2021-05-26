import React, { Component } from "react";
import TweetForm from './TweetForm.jsx';
import Tweet from "./Tweet.jsx";
import {ShiningImg} from '../img';


class Feed extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return<div className="main-content nes-container is-rounded">
      <div className="main-content__header">
        <h1 className="main-content__header__title">Home</h1>
          <a className="main-content__header__button">
            <img src={ShiningImg} alt=""/>
          </a>
      </div>
      <TweetForm />
        {this.props.tweets.map(e => <Tweet key={e._id} {...e}/>)}
    </div>
  }
}

export default Feed;