import React, { useState } from 'react';
import './StemEx.scss';
import '../../Stem.scss';
import { EX, TicketDetails } from 'types/stem.types';
import GraphicIcon from 'components/DonoStyles/GraphicIcon/GraphicIcon';
import ProductPie from 'components/DonoStyles/GraphicIcon/ProductPie/ProductPie';
import TextIcon from 'components/DonoStyles/TextIcon/TextIcon';
import StemProductDetails from './StemProductDetails';

interface Props {
  label: string;
  data: EX;
  date: string;
  exColor?: string;
  openTicketForm: React.Dispatch<React.SetStateAction<boolean>>;
  handleTicketDetails: React.Dispatch<React.SetStateAction<TicketDetails>>;
}
const StemEX: React.FC<Props> = ({ label, data, date, openTicketForm, handleTicketDetails }) => {
  const [expandIndex, setExpandIndex] = useState(0);
  const products = data.data;
  const LabelArray = Object.keys(products);
  const valueArray = Object.values(products).map((item, index) => (index === expandIndex ? { ...item, expand: true } : { ...item, expand: false }));

  const TicketForm = (details: TicketDetails) => {
    openTicketForm(true);
    handleTicketDetails(details);
  };

  return (
    <>
      {/* ---------------------stem--columns ------------------ */}
      <div className='stem__ex'>
        <div className={`ex__header ${label.toLowerCase()}`}>
          <p className='product__type'>{label}</p>
          <p>{date}</p>
          <GraphicIcon type='chevon' />
        </div>
        {/* --------------------Column Details ------------------------------ */}
        {valueArray.map((product, index) => {
          const ticket = {
            contract: label,
            bestVol: product.bestVol,
            bestPrice: product.bestPrice,
            lastTrade: product.lastTrade,
            product: LabelArray[index],
            day: date,
          };

          return (
            <div key={index} className='ex__body'>
              <div className='top'>
                <GraphicIcon type='star' />
                <div className='pie'>
                  <ProductPie product={LabelArray[index]} />
                </div>
                <div
                  onClick={() => {
                    TicketForm(ticket);
                  }}
                >
                  <GraphicIcon type='ticket' />
                </div>
              </div>
              <div className='center'>
                <div className='center__items'>
                  <div>
                    <TextIcon priceDetails='v' />
                    <p>{product.bestVol}</p>
                  </div>
                  <div>
                    <TextIcon priceDetails='p' />
                    <p>{product.bestPrice}</p>
                  </div>
                  <div>
                    <TextIcon priceDetails='l' />
                    <p>{product.bestPrice}</p>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setExpandIndex(index);
                  }}
                >
                  <GraphicIcon type='chevon' />
                </div>
              </div>
              {/* Stem Trading Details */}
              <div className={product.expand === true ? 'bottom' : 'bottom hidden'}>
                <StemProductDetails productDetails={product.tradingDetails} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StemEX;
