import React, { Component } from "react";
import userImg from "../img/user.svg";
import galeryImg from "../img/galery.svg";
import gifImg from "../img/gif.svg";
import pollImg from "../img/poll.svg";
import smileImg from "../img/smile.svg";
import calendarImg from "../img/calendar.svg";

class TweetForm extends Component {
  render() {
    return (
      <div className='main-content__item'>
        <div className='main-contetn__item__avatar'>
          <img src={userImg} alt='' />
        </div>
        <div className='main-content__item__new-tweet-constructor new-tweet-constructor'>
          <textarea
            id='textarea_field'
            rows='3'
            className='nes-textarea new-twitt-constructor__textarea'></textarea>
          <div className='new-tweet-constructor__footer'>
            <div className='new-tweet-constructor__footer__features'>
              <a
                href=''
                className='new-tweet-constructor__footer__features__item'>
                <img src={galeryImg} alt='' />
              </a>
              <a
                href=''
                className='new-tweet-constructor__footer__features__item'>
                <img src={gifImg} alt='' />
              </a>
              <a
                href=''
                className='new-tweet-constructor__footer__features__item'>
                <img src={pollImg} alt='' />
              </a>
              <a
                href=''
                className='new-tweet-constructor__footer__features__item'>
                <img src={smileImg} alt='' />
              </a>
              <a
                href=''
                className='new-tweet-constructor__footer__features__item'>
                <img src={calendarImg} alt='' />
              </a>
            </div>
            <button className='nes-btn is-primary new-tweet-constructor__footer__btn'>
              Tweet
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TweetForm;
