import React from "react";
import { moreImg, commentImg, retweetImg, heartImg, uploadImg } from "../img";
import dayjs from "dayjs";

const Tweet = (props) => {
  const { user = {}, content = {}, statistic = {}, createdAt, _id , onReply, onRetweet, onLicke} = props;
  const onReplyClick = () => {
    onReply(_id);
  }
  const onRetweetClick = () => {
    onRetweet(_id);
  }
  const onLickeClick = () => {
    onLicke(_id);
  }
  return (
    <div className='main-content__item post'>
      <div className='post__avatar'>
        <img src={user.avatarUrl} alt='User Avatar' />
      </div>
      <div className='post__header'>
        <div className='post__author'>
          <a className='post__author-name'>{user.firstName} {user.lastName}</a>
          <a className='post__author-login'>@{user._nickname}</a>
        </div>
        <a className='post__timer'>{dayjs(createdAt).fromNow()}</a>
        <a className='post__more-btn'>
          <img src={moreImg} alt='' />
        </a>
      </div>
      <div className='post__text'>{content.text}</div>
      {content.photo.hasPhoto ? (
        <div className='post__photo'>
          <img src={content.photo.url} alt='' />
        </div>) : ""}

      <div className='post__footer'>
        <div onClick={onReplyClick} className='post__footer__item post__footer__item__reply'>
          <div className='post__footer__item__img'>
            <img src={commentImg} alt='' />
          </div>
          <span className='post__footer__item__counter'>{statistic.replies}</span>
        </div>
        <div onClick={onRetweetClick} className='post__footer__item post__footer__item__retweet'>
          <div className='post__footer__item__img'>
            <img src={retweetImg} alt='' />
          </div>
          <span className='post__footer__item__counter'>{statistic.retweets}</span>
        </div>
        <div onClick={onLickeClick} className='post__footer__item post__footer__item__like'>
          <div className='post__footer__item__img'>
            <img src={heartImg} alt='' />
          </div>
          <span className='post__footer__item__counter'>{statistic.lickes}</span>
        </div>
        <div className='post__footer__item post__footer__item__share'>
          <div className='post__footer__item__img'>
            <img src={uploadImg} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
