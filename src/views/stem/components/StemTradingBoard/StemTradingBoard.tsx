import React from 'react';
import './StemTradingBoard.scss';
import data from '../../StemTradingBoard.json';
import GraphicIcon from 'components/DonoStyles/GraphicIcon/GraphicIcon';
import ProductPie from 'components/DonoStyles/GraphicIcon/ProductPie/ProductPie';
import TextIcon from 'components/DonoStyles/TextIcon/TextIcon';
const StemTradingBoard = () => {
  return (
    <div className='stem__trading__board'>
      <div className='trading__board-timer'>
        <div>
          <p className='strong'>15 mins</p>
          <p>to the Next Stage</p>
        </div>
        <div className='timer'>
          <div className='bar'></div>
          <div className='point'></div>
          <div className='point middle'></div>
          <div className='point end'></div>
          <div className='runner'></div>
        </div>
      </div>
      <div className='trading__board-content'>
        <div className='header'>
          <p>Fav</p>
          <p>Type</p>
          <p>Time</p>
          <p>Note</p>
          <p>Contract</p>
          <p>Product</p>
          <TextIcon priceDetails='p' />
          <TextIcon priceDetails='v' />
          <p>Status</p>
        </div>
        <div className='table'>
          {data.map((item, index) => {
            const details = item.orderDetails;
            return (
              <div key={index} className='table-row'>
                <GraphicIcon type='star' />
                <p className='type'>{item.type.toUpperCase()}</p>
                <p className='time'>{item.time}</p>
                <TextIcon note={details.note} />
                <div className='contract-icon'>
                  <TextIcon contract={details.contract} />
                </div>
                <div className='product__group'>
                  <ProductPie product={details.product} />
                  <p>{details.product.toUpperCase()}</p>
                </div>
                <p className='price'>{details.price}</p>
                <p className='vol'>{details.vol}</p>
                <TextIcon status={details.status} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StemTradingBoard;
