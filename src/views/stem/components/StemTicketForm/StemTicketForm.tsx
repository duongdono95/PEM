import GraphicIcon from 'components/DonoStyles/GraphicIcon/GraphicIcon';
import PaperPlane from 'components/DonoStyles/GraphicIcon/PaperPlane/PaperPlane';
import ProductPie from 'components/DonoStyles/GraphicIcon/ProductPie/ProductPie';
import TextIcon from 'components/DonoStyles/TextIcon/TextIcon';
import React, { useState, useEffect, useRef } from 'react';
import { TicketDetails } from 'types/stem.types';
import './StemTicketForm.scss';
import TicketFormInput from './TicketFormInput';

interface Props {
  data?: TicketDetails;
  openTicketForm: React.Dispatch<React.SetStateAction<boolean>>;
}
const StemTicketForm: React.FC<Props> = ({ data, openTicketForm }) => {
  const roles = ['buyer', 'seller'];
  const [activeRole, setActiveRole] = useState('buyer');

  // functions & States for Draggable button
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderBarRef = useRef<HTMLDivElement>(null);
  const sliderBarWidth = sliderBarRef.current?.offsetWidth;
  const sliderWidth = sliderRef.current?.offsetWidth;
  const [mouseIsDown, setMouseIsDown] = useState(false);
  const [limitedMovement, setLimitedMovement] = useState(0);
  const [sliderPosition, setSliderPosition] = useState<number>(0);
  const [mouseDownPosition, setMouseDownPosition] = useState(0);
  const [mouseMovingPosition, setMouseMovingPosition] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const changeRole = (role: string) => {
    setActiveRole(role);
    setIsSubmitted(false);
    setSliderPosition(0);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSubmitted(false);
      setSliderPosition(0);
    }, 1500);
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  const mouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMouseIsDown(true);
    if (sliderBarWidth !== undefined && sliderWidth !== undefined) {
      setLimitedMovement(sliderBarWidth - sliderWidth + 2);
    }
    setMouseDownPosition(e.clientX);
  };
  const mouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMouseIsDown(false);
    const movingDistance = mouseMovingPosition - mouseDownPosition;
    if (movingDistance >= limitedMovement && sliderPosition !== 0) {
      setSliderPosition(limitedMovement);
      setIsSubmitted(true);
    }
    if (movingDistance > 0 && movingDistance < limitedMovement) {
      setSliderPosition(0);
    }
  };
  const mouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMouseMovingPosition(e.clientX);
    if (mouseIsDown) {
      const movingDistance = mouseMovingPosition - mouseDownPosition;
      if (movingDistance >= limitedMovement) {
        setSliderPosition(limitedMovement);
      }
      if (movingDistance > 0 && movingDistance < limitedMovement) {
        setSliderPosition(movingDistance);
      }
    }
  };

  return (
    <div ref={containerRef} className='stem__ticket__form' onMouseMove={e => mouseMove(e)} onMouseUp={e => mouseUp(e)} onTouchEnd={e => mouseUp}>
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
        <div className='submitter__container'>
          <div className='roles noselect'>
            {roles.map((role, index) => {
              return (
                <p key={index} className={role} style={role === activeRole ? { opacity: 1 } : { opacity: 0.5 }} onClick={() => changeRole(role)}>
                  {role === 'buyer' ? 'Buyer' : 'Seller'}
                </p>
              );
            })}
          </div>
          <div className='submitter' style={{ backgroundColor: `var(--${activeRole})` }}>
            <div ref={sliderBarRef} className={isSubmitted ? 'slide-bar submitted' : 'slide-bar'}>
              <div ref={sliderRef} className='handler-container' onMouseDown={e => mouseDown(e)} onTouchStart={e => mouseDown} style={{ left: `${sliderPosition}px` }}>
                {!isSubmitted && (
                  <p style={{ color: `var(--${activeRole})` }} className={isSubmitted ? 'hidden' : 'handler noselect'}>
                    {activeRole === 'buyer' ? 'B' : 'S'}
                  </p>
                )}
                {isSubmitted && (
                  <div className='submitted-icon'>
                    <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M23.3445 10.1973L12.3445 21.1973L7.34454 16.1973' stroke='green' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                  </div>
                )}
              </div>
              <p className='noselect'>{isSubmitted ? 'Your Ticket have been submitted' : 'Drag to Submit'}</p>
              <div className='drop-zone'>
                <PaperPlane />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StemTicketForm;
