import React, { Component } from "react";
import {moreImg, commentImg, retweetImg, heartImg, uploadImg} from '../img';
import dayjs from "dayjs";

const Tweet = (props) => {
  const {user = {}, content = {}, createdAt, _id, } = props;
  return (
    <div className="main-content__item post">
        <div className="post__avatar">
          <img src={user.avatarUrl} alt="User Avatar"/>
        </div>
        <div className="post__header">
          <a className="post__author-name">{user.firstName} {user.lastName}</a>
          <a className="post__author-login">@{user._nickname}</a>
          <a className="post__timer">{dayjs(createdAt).fromNow()}</a>
          <a className="post__more-btn"><img src={moreImg} alt=""/></a>
        </div>
        <div className="post__text">{content.text}</div>
        {Math.random() > .5 ? <div className="post__photo"><img src={content.photo} alt=""/></div> : ''}
        
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
  )
}

export default Tweet;