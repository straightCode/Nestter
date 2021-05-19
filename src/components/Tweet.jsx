import React, { Component } from "react";
import moreImg from '../img/more.svg';
import starshipImg from '../img/starship.png';
import elonImg from '../img/elon.jpg';
import commentImg from '../img/comment.svg';
import retweetImg from '../img/retweet.svg';
import heartImg from '../img/heart.svg';
import uploadImg from '../img/upload.svg';

class Tweet extends Component {
  render(){
    return <div className="main-content__item post">
        <div className="post__avatar"><img src={starshipImg} alt=""/></div>
        <div className="post__header">
          <a className="post__author-name">Elon Musk</a>
          <a className="post__author-login">@elonmusk</a>
          <a className="post__timer">31m</a>
          <a className="post__more-btn"><img src={moreImg} alt=""/></a>
        </div>
        <div className="post__text">guest starting ...</div>
        <div className="post__photo"><img src={elonImg} alt=""/></div>
        <div className="post__footer">
          <a href="" className="post__footer__item post__footer__item__reply">
            <div className="post__footer__item__img"><img src={commentImg} alt=""/></div>
            <span className="post__footer__item__counter">16.2K</span>
          </a>
          <a href="" className="post__footer__item post__footer__item__retweet">
            <div className="post__footer__item__img"><img src={retweetImg} alt=""/></div>
            <span className="post__footer__item__counter">48.2K</span>
          </a>
          <a href="" className="post__footer__item post__footer__item__like">
            <div className="post__footer__item__img"><img src={heartImg} alt=""/></div>
            <span className="post__footer__item__counter">212.5K</span>
          </a>
          <a href="" className="post__footer__item post__footer__item__share">
            <div className="post__footer__item__img"><img src={uploadImg} alt=""/></div>
          </a>
        </div>
      </div>
  }
}

export default Tweet;