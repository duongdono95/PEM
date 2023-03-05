import React from 'react';
import './StemFavorite.scss';
import data from '../../StemFavorite.json';
import GraphicIcon from 'components/DonoStyles/GraphicIcon/GraphicIcon';
import TextIcon from 'components/DonoStyles/TextIcon/TextIcon';
import ProductPie from 'components/DonoStyles/GraphicIcon/ProductPie/ProductPie';

const StemFavorite = () => {
  return (
    <div className='stem__favorite'>
      <div className='stem__favorite-top'>
        <p className='label'>FAVORITE</p>
      </div>
      <div className='stem__favorite-bottom'>
        {data.map((item, index) => {
          return (
            <div key={index} className='favorite-row'>
              <GraphicIcon type='star' />
              <TextIcon note={item.note} />
              <TextIcon contract={item.contract} />
              <div className='product-group'>
                <ProductPie product={item.product} />
                <p>{item.product.toUpperCase()}</p>
              </div>
              <p>{item.date}</p>
              <GraphicIcon type='trash' />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StemFavorite;
