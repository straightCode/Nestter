import React, { Component } from "react";
import settingsImg from '../img/settings.svg';
import moreImg from '../img/more.svg';
import netflixImg from '../img/netflix.png';


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
          <div className="trends__item nes-pointer">
            <div className="trends__item__country">Trending in Ukrane</div>
            <div className="trens__item__title">Правильно</div>
            <div className="trends__item__tweets">3,364 Tweets</div>
            <div className="trends__item__more-btn"><img src={moreImg} alt=""/></div>
          </div>
          <div className="trends__item nes-pointer">
            <div className="trends__item__country">Trending in Ukrane</div>
            <div className="trens__item__title">Простите</div>
            <div className="trends__item__tweets">2,13M Tweets</div>
            <div className="trends__item__more-btn"><img src={moreImg} alt=""/></div>
          </div>
          <div className="trends__item nes-pointer">
            <div className="trends__item__country">Trending in Ukrane</div>
            <div className="trens__item__title">Порошенко</div>
            <div className="trends__item__tweets">7,049 Tweets</div>
            <div className="trends__item__more-btn"><img src={moreImg} alt=""/></div>
          </div>
          <div className="trends__item nes-pointer">
            <div className="trends__item__country">Trending in Ukrane</div>
            <div className="trens__item__title">Santa Monika</div>
            <div className="trends__item__tweets">2,855 Tweets</div>
            <div className="trends__item__more-btn"><img src={moreImg} alt=""/></div>
          </div>
          <div className="trends__item nes-pointer">
            <div className="trends__item__country">Trending in Ukrane</div>
            <div className="trens__item__title">Похожее</div>
            <div className="trends__item__tweets">38,5K Tweets</div>
            <div className="trends__item__more-btn"><img src={moreImg} alt=""/></div>
          </div>
        </div>
        <div className="trends__footer nes-pointer">
          <a href="" className="trends__footer__show-more-btn">Show more</a>
        </div>
      </div>

      <div className="sidebar-right__WTF WTF nes-container is-rounded">
        <div className="WTF__title">Who to follow</div>
        <div className="WTF__items">
          <div className="WTF__item">
            <div className="WTF__item__avatr"><img src={netflixImg} alt=""/></div>
            <div className="WTF__item__account">
              <div className="WTF__item__account__name">Netflix</div>
              <div className="WTF__item__account__link">@netflix</div>
            </div>
            <button className="WTF__itmem__follow-btn nes-btn is-primary">Follow</button>
          </div>
          <div className="WTF__item">
            <div className="WTF__item__avatr"><img src={netflixImg} alt=""/></div>
            <div className="WTF__item__account">
              <div className="WTF__item__account__name">Netflix</div>
              <div className="WTF__item__account__link">@netflix</div>
            </div>
            <button className="WTF__itmem__follow-btn nes-btn is-primary">Follow</button>
          </div>
          <div className="WTF__item">
            <div className="WTF__item__avatr"><img src={netflixImg} alt=""/></div>
            <div className="WTF__item__account">
              <div className="WTF__item__account__name">Netflix</div>
              <div className="WTF__item__account__link">@netflix</div>
            </div>
            <button className="WTF__itmem__follow-btn nes-btn is-primary">Follow</button>
          </div>
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