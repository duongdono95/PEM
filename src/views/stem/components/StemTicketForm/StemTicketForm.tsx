import GraphicIcon from 'components/DonoStyles/GraphicIcon/GraphicIcon';
import ProductPie from 'components/DonoStyles/GraphicIcon/ProductPie/ProductPie';
import TextIcon from 'components/DonoStyles/TextIcon/TextIcon';
import React from 'react';
import { TicketDetails } from 'types/stem.types';
import './StemTicketForm.scss';
import FormSubmit from './FormSubmit';

interface Props {
  data?: TicketDetails;
  openTicketForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const StemTicketForm: React.FC<Props> = ({ data, openTicketForm }) => {
  console.log(data?.day);
  const collapseTicketForm = () => {
    openTicketForm(false);
  };
  return (
    <div className='stem__ticket__form'>
      <div className='ticket__form'>
        <div onClick={collapseTicketForm} className='collapse__icon'>
          <GraphicIcon type='close' scale={1.5} />
        </div>
        <div className='label'>
          <p>CREATE TICKET</p>
        </div>
        <div className={data ? `contract ${data.contract.toLowerCase()}` : 'contract'}>
          <p>{data?.contract}</p>
          <p>{data?.day}</p>
        </div>
        <div className='product'>
          <div className='product-left'>
            {data && <ProductPie product={data.product} />}
            <p>{data?.product.toUpperCase()}</p>
          </div>
          <div className='product-right'>
            <div>
              <TextIcon priceDetails='v' />
              <p>{data?.bestVol}</p>
            </div>
            <div>
              <TextIcon priceDetails='p' />
              <p>{data?.bestPrice}</p>
            </div>
            <div>
              <TextIcon priceDetails='l' />
              <p>{data?.lastTrade}</p>
            </div>
          </div>
        </div>
        <div className='inputs'>
          <div className='inputs-left'>
            <div className='input vol'>
              <div className='title'>
                <p>Bid</p>
                <TextIcon priceDetails='v' />
              </div>
              <input type='number' id='bid__vol' />
            </div>
            <div className='input price'>
              <div className='title'>
                <p>Bid</p>
                <TextIcon priceDetails='p' />
              </div>
              <input type='number' id='bid__vol' />
            </div>
          </div>
          <div className='inputs-right'>
            <div className='step'>
              <p>+1</p>
            </div>
            <div className='step'>
              <p>+3</p>
            </div>
            <div className='step'>
              <p>+5</p>
            </div>
            <div className='step'>
              <p>+10</p>
            </div>
            <div className='reset'>
              <GraphicIcon type='reset' />
            </div>
          </div>
        </div>
        <div className='submit__container'>
          <FormSubmit />
        </div>
      </div>
    </div>
  );
};

export default StemTicketForm;
