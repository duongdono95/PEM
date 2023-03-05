import React from 'react';
import './StemTradingBoard.scss';
import data from '../../StemTradingBoard.json';
import TradingBoardTop from './TradingBoardTop';
import GraphicIcon from 'components/DonoStyles/GraphicIcon/GraphicIcon';
import ProductPie from 'components/DonoStyles/GraphicIcon/ProductPie/ProductPie';
import TextIcon from 'components/DonoStyles/TextIcon/TextIcon';
const StemTradingBoard = () => {
  return (
    <div className='stem__trading__board'>
      <TradingBoardTop />
      <div className='trading__board-bottom'>
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
