import TextIcon from 'components/DonoStyles/TextIcon/TextIcon';
import React from 'react';
import { EXTradingDetails } from 'types/stem.types';
import './StemEx.scss';

interface Props {
  productDetails: EXTradingDetails;
}
const StemProductDetails: React.FC<Props> = ({ productDetails }) => {
  const details = Object.values(productDetails);
  return (
    <>
      <div className='labels'>
        <div>
          <p>Bid</p>
          <TextIcon priceDetails='v' />
        </div>
        <div>
          <p>Bid</p>
          <TextIcon priceDetails='p' />
        </div>
        <div>
          <p>Ask</p>
          <TextIcon priceDetails='p' />
        </div>
        <div>
          <p>Ask</p>
          <TextIcon priceDetails='v' />
        </div>
      </div>
      {details.map((detail, index) => {
        return (
          <div key={index} className='trading__details'>
            <p>{detail.bidVol}</p>
            <p>{detail.bidPrice}</p>
            <p>{detail.askPrice}</p>
            <p>{detail.askVol}</p>
          </div>
        );
      })}
    </>
  );
};

export default StemProductDetails;
