import GraphicIcon from 'components/DonoStyles/GraphicIcon/GraphicIcon';
import TextIcon from 'components/DonoStyles/TextIcon/TextIcon';
import React from 'react';
import { EXOrder } from 'types/stem.types';
import ProductPie from 'components/DonoStyles/GraphicIcon/ProductPie/ProductPie';

interface Props {
  orders: EXOrder[];
}

const StemOrders: React.FC<Props> = ({ orders }) => {
  return (
    <>
      <div className='tools'>
        <p>Delete All</p>
        <GraphicIcon type='trash' />
      </div>
      <div className='orders'>
        {orders.map((order, index) => {
          const orderDetails = order.details;
          return (
            <div key={index} className='order'>
              <div>
                <GraphicIcon type='selectIcon' />
              </div>
              <div>
                <TextIcon note={orderDetails.note} />
              </div>
              <TextIcon contract={orderDetails.EX} />
              <div>
                <ProductPie product={orderDetails.Product} />
                <p>{orderDetails.Product}</p>
              </div>
              <p className='date'>{orderDetails.Date}</p>
              <div className='data__group'>
                <TextIcon priceDetails='v' />
                <p>{orderDetails.volume}</p>
              </div>
              <div className='data__group'>
                <TextIcon priceDetails='p' />
                <p>{orderDetails.Price}</p>
              </div>
              <GraphicIcon type='switchIcon' scale={0.8} />
              <GraphicIcon type='edit' scale={0.8} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StemOrders;
