import React from "react";


const RecomendationItem = (props) => {
  const {avatar, name} = props;
  return (
    <div className='WTF__item'>
      <div className='WTF__item__avatr'>
        <img src={avatar} alt='' />
      </div>
      <div className='WTF__item__account'>
        <div className='WTF__item__account__name'>{name}</div>
        <div className='WTF__item__account__link'>@{name}</div>
      </div>
      <button className='WTF__itmem__follow-btn nes-btn is-primary'>
        Follow
      </button>
    </div>
  );
};

export default RecomendationItem;