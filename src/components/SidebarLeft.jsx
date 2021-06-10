import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import userImg from '../img/user.svg';
import moreImg from '../img/more.svg';
import arrowDownImg from '../img/arrow-down.svg';

class SidebarLeft extends Component{
  render(){
    return <div className="sidebar-left">
      <div className="logo">
        <i className="nes-icon twitter"></i>
      </div>
      <nav className="nav-menu">
        <Link to="/" className="nes-btn nav-menu__item" href="#">Home</Link>
        <Link to="/login" className="nes-btn nav-menu__item" href="#">Login</Link>
        <a className="nes-btn nav-menu__item" href="#">Messages</a>
        <a className="nes-btn nav-menu__item" href="#">Bookmarks</a>
        <a className="nes-btn nav-menu__item" href="#">Lists</a>
        <Link to="/profile" className="nes-btn nav-menu__item" href="#">Profile</Link>
        <a className="nes-btn nav-menu__item" href="#">More</a>
        <Link to="/example" className="nes-btn nav-menu__item" href="#">Example</Link>
      </nav>

      <button type="button" className="nes-btn is-primary sidebar-left__tweet-btn">Tweet</button>

      <div className="nes-balloon sidebar-left__account-menu">

        <div className="account-menu__avatar">
          <img src={userImg}/>
        </div>
        <div className="account-menu__name">
          <div className="account-menu__nikname">username</div>
          <div className="account-menu__login">@username</div>
        </div>

        <div className="account-menu__more-btn">
          <img src={moreImg} alt=""/>
        </div>

        <div className="nes-balloon from-left account-menu__popup active">
          <div className="account-menu__avatar margin-left">
            <img src={userImg} alt=""/>
            </div>
          <div className="account-menu__name">
            <div className="account-menu__nikname">username</div>
            <div className="account-menu__login">@username</div>
          </div>
          <div className="account-menu__more-btn-big">
            <img src={arrowDownImg} alt=""/>
          </div>
          <a className="nes-btn account-menu__popup__btn" href="#">Add an existing account</a>
          <a className="nes-btn account-menu__popup__btn" href="#">Log out @Weedsurf</a>
        </div>
      </div>
    </div>
  }
}

export default SidebarLeft;