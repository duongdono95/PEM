import GraphicIcon from 'components/DonoStyles/GraphicIcon/GraphicIcon';

import ProductPie from 'components/DonoStyles/GraphicIcon/ProductPie/ProductPie';
import TextIcon from 'components/DonoStyles/TextIcon/TextIcon';
import React, { useState, useEffect, useRef } from 'react';
import { TicketDetails } from 'types/stem.types';
import './StemTicketForm.scss';
import Submitter from './Submitter';
import TicketFormInput from './TicketFormInput';

interface Props {
  data?: TicketDetails;
  openTicketForm: React.Dispatch<React.SetStateAction<boolean>>;
}
const StemTicketForm: React.FC<Props> = ({ data, openTicketForm }) => {
  return (
    <div className='stem__ticket__form'>
      <div className='ticket__form'>
        <div onClick={() => openTicketForm(false)} className='collapse__icon'>
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
        {/* ----------------------------------input zone --------------------------------------------- */}
        <TicketFormInput />

        {/* -----------------------------------submitter --------------------------------------------- */}
        <Submitter />
      </div>
    </div>
  );
};

export default StemTicketForm;
