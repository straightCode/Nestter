import React, { Component } from "react";
import settingsImg from '../img/settings.svg';
import TrendsItem from './TrendsItem.jsx';
import RecomendationItem from './RecomendationItem.jsx';


class SidebarRight extends Component {
  render(){
    return(
    <div className="sidebar-right">
      <div className="sidebar-right__search">
        <input type="text" id="name_field" className="nes-input sidebar-right__search__input" placeholder="Search Twitter"/>
      </div>

      <div className="sidebar-right__trends trends nes-container is-rounded">
        <div className="trends__header">
          <div className="trends__header__title">Trends for you</div>
          <div className="trends__header__settings-btn nes-pointer"><img src={settingsImg} alt=""/></div>
        </div>
        <div className="trends__items">
          {this.props.trends.map(e => {
            return <TrendsItem key={e._id} {...e}/>
          })}
        </div>
        <div className="trends__footer nes-pointer">
          <a href="" className="trends__footer__show-more-btn">Show more</a>
        </div>
      </div>

      <div className="sidebar-right__WTF WTF nes-container is-rounded">
        <div className="WTF__title">Who to follow</div>
        <div className="WTF__items">
          {this.props.recomendations.map(e => {
            return <RecomendationItem key={e._id} {...e}/>
          })}
        </div>
        <div className="WTF__footer nes-pointer">
          <a href="" className="WTF__footer__show-more-btn">Show more</a>
        </div>
      </div>

      <div className="sidebar-right__copyright">
        <a href="" className="sidebar-right__copyright__item">Therms of Service</a>
        <a href="" className="sidebar-right__copyright__item">Privacy Policy</a>
        <a href="" className="sidebar-right__copyright__item">Cookie Policy</a>
        <a href="" className="sidebar-right__copyright__item">Ads info</a>
        <a href="" className="sidebar-right__copyright__item">More...</a>
        <a href="" className="sidebar-right__copyright__item">© 2021 Twitter, Inc.</a>
      </div>
    </div>)
  }
}

export default SidebarRight;