import React, { useState } from 'react';
import './StemEx.scss';
import '../../Stem.scss';
import { EX, TicketDetails } from 'types/stem.types';
import GraphicIcon from 'components/DonoStyles/GraphicIcon/GraphicIcon';
import ProductPie from 'components/DonoStyles/GraphicIcon/ProductPie/ProductPie';
import TextIcon from 'components/DonoStyles/TextIcon/TextIcon';

interface Props {
  contractType: string;
  date: string;
  data: EX;
  exColor?: string;
  openTicketForm: React.Dispatch<React.SetStateAction<boolean>>;
  handleTicketDetails: React.Dispatch<React.SetStateAction<TicketDetails>>;
}

const blankTicketForm: TicketDetails = {
  contract: '',
  day: '',
  product: '',
  bestVol: 0,
  bestPrice: 0,
  lastTrade: 0,
};
const StemEX: React.FC<Props> = ({ data, openTicketForm, handleTicketDetails, contractType, date }) => {
  const [ticketData, setTicketData] = useState<TicketDetails>(blankTicketForm);
  const products = Object.entries(data.data);

  const ticketForm = (details: TicketDetails) => {
    openTicketForm(true);
    handleTicketDetails(details);
    console.log('hello');
  };
  return (
    <>
      {/* ---------------------stem--columns ------------------ */}
      <div className='ex-body'>
        {products.map((product, index) => {
          const tradingDetailObject = product[1].tradingDetails;
          const tradingDetailsArray = Object.entries(tradingDetailObject);
          console.log(product);
          const ticket = {
            contract: contractType,
            day: date,
            product: product[0],
            bestVol: product[1].bestVol,
            bestPrice: product[1].bestPrice,
            lastTrade: product[1].lastTrade,
          };
          return (
            <div key={index} className='product'>
              {tradingDetailsArray.map((line, index) => {
                return (
                  <div key={index} className='product__details'>
                    <div className='icons'>
                      {index === 0 ? <GraphicIcon type='star' /> : <div className='empty-box'></div>}
                      {index === 0 ? <ProductPie product={product[0]} /> : <div className='empty-box'></div>}
                    </div>
                    <div className='data-container'>
                      <p className='data'>{line[1].bidVol}</p>
                      <p className='data'>{line[1].bidPrice}</p>
                      <p className='data'>{line[1].askPrice}</p>
                      <p className='data'>{line[1].askVol}</p>
                    </div>
                    <div className='icon'>
                      {index === 0 ? (
                        <div onClick={e => ticketForm(ticket)}>
                          <GraphicIcon type='ticket' />
                        </div>
                      ) : (
                        <div className='empty-box'></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StemEX;
