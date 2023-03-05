import React from 'react';

const TradingBoardTop = () => {
  return (
    <div className='trading__board-top'>
      <p className='label'>TRADING BOARD</p>
      <div className='trading__board-timer'>
        <div>
          <p className='strong'>15 mins</p>
          <p>to the Next Stage</p>
          <div className='timer'>
            <div className='bar'></div>
            <div className='point'></div>
            <div className='point middle'></div>
            <div className='point end'></div>
            <div className='runner'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingBoardTop;
