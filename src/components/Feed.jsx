import React, { Component } from "react";
import TweetForm from './TweetForm.jsx';
import ShiningImg from '../img/shining.svg';
import Tweet from "./Tweet.jsx";


class Feed extends Component{
  render(){
    return<div className="main-content nes-container is-rounded">
      <div className="main-content__header">
        <h1 className="main-content__header__title">Home</h1>
          <a className="main-content__header__button">
            <img src={ShiningImg} alt=""/>
          </a>
      </div>

      <TweetForm />     
      <Tweet />
      <Tweet />
      <Tweet />

    </div>
  }
}

export default Feed;