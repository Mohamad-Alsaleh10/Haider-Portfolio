import React from 'react';
import Marquee from 'react-marquee-slider';
import './NewsTicker.css';

const NewsTicker = ({ news }) => {
  return (
    <div className="news-ticker-container">
      <Marquee velocity={18} direction="ltr">
        {news.map((item, index) => (
          <span key={index} dangerouslySetInnerHTML={{ __html: item }} className='new-item-m'></span>
        ))}
      </Marquee>
    </div>
  );
};

export default NewsTicker;