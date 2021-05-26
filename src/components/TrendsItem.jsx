import React from "react";
import {moreImg} from '../img/';


const TrendsItem = (props) => {
  const {_id, country, tweets, name} = props;
  return (
    <div className='trends__item nes-pointer'>
      <div className='trends__item__country'>Trending in {country}</div>
      <div className='trens__item__title'>{name}</div>
      <div className='trends__item__tweets'>{tweets} Tweets</div>
      <div className='trends__item__more-btn'>
        <img src={moreImg} alt='' />
      </div>
    </div>
  );
};

export default TrendsItem;