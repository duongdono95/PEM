import GraphicIcon from 'components/DonoStyles/GraphicIcon/GraphicIcon';
import ProductPie from 'components/DonoStyles/GraphicIcon/ProductPie/ProductPie';
import TextIcon from 'components/DonoStyles/TextIcon/TextIcon';
import React, { useState, useEffect } from 'react';
import { TicketDetails } from 'types/stem.types';
import './StemTicketForm.scss';
import Submitter from './Submitter';

interface Props {
  data?: TicketDetails;
  openTicketForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const StemTicketForm: React.FC<Props> = ({ data, openTicketForm }) => {
  const roles = ['buyer', 'seller'];
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeRole, setActiveRole] = useState(roles[activeIndex]);

  useEffect(() => {
    setActiveRole(roles[activeIndex]);
  }, [activeIndex]);
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
          <div className='roles'>
            {roles.map((role, index) => {
              return (
                <p key={index} className={role === activeRole ? `${role}` : `${role} opacity05`} onClick={() => setActiveIndex(index)}>
                  {role === 'buyer' ? 'Buyer' : 'Seller'}
                </p>
              );
            })}
          </div>
          <Submitter role={activeRole} />
        </div>
      </div>
    </div>
  );
};

export default StemTicketForm;
