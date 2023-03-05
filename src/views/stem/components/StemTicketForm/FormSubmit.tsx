import GraphicIcon from 'components/DonoStyles/GraphicIcon/GraphicIcon';
import React, { useEffect, useState } from 'react';

const FormSubmit = () => {
  const [isBuy, setIsBuy] = useState(true);
  const [flag, setFlag] = useState(false);
  const [left, setLeft] = useState<number>(0);
  const [firstX, setFirstX] = useState<number>(0);
  const [move, setMove] = useState<EventTarget & HTMLDivElement>();
  const [dragX, setDragX] = useState<number>(0);
  const mouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setFlag(true);
    setFirstX(e.pageX);
  };
  const mouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setFlag(false);
    e.currentTarget.style.left = '2px';
  };
  const mouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (flag) {
      setDragX(e.pageX);
      if (dragX > firstX) {
        setLeft(dragX - firstX);
        console.log(left);
        console.log(dragX);
        console.log(firstX);
        if (left >= 220) {
          console.log('success');
        } else {
          e.currentTarget.style.left = `${left}px`;
        }
      }
    }
  };
  useEffect(() => {
    setLeft(left);
  }, [left]);
  return (
    <div className='form__submit-container'>
      <div className='form__submit'>
        <div style={isBuy ? { backgroundColor: 'rgba(15, 37, 165, 0.3)' } : { backgroundColor: 'rgba(255, 255, 255, 0.2)' }} className={isBuy ? 'handle__container width80' : 'handle__container width20'}>
          <div
            onClick={() => {
              setIsBuy(!isBuy);
            }}
            style={isBuy ? { backgroundColor: 'rgb(15, 37, 165)' } : { backgroundColor: 'rgb(102, 102, 102' }}
            className='buy__handle '
            draggable='true'
            onMouseDown={e => {
              mouseDown(e);
              setMove(e.currentTarget);
            }}
            onMouseUp={e => {
              mouseUp(e);
            }}
            onMouseMove={e => {
              mouseMove(e);
            }}
          >
            <p>Buy</p>
            {isBuy && <div className='pumping'></div>}
          </div>
          {isBuy && <p className='draggable__des'>Drag to Submit</p>}
        </div>
        <div style={isBuy ? { left: '75%' } : { left: '15%' }} className='submit__icon'>
          <GraphicIcon type='paperPlane' />
        </div>
        <div style={!isBuy ? { backgroundColor: 'rgba(165, 15, 15, 0.3)' } : { backgroundColor: 'rgba(255, 255, 255, 0.2)' }} className={!isBuy ? 'handle__container width80' : 'handle__container width20'}>
          {!isBuy && <p className='draggable__des'>Drag to Submit</p>}
          <div
            onClick={() => {
              setIsBuy(!isBuy);
            }}
            style={!isBuy ? { backgroundColor: 'rgb(165, 15, 15)' } : { backgroundColor: 'rgb(102, 102, 102' }}
            className='sell__handle'
          >
            <p>Sell</p>
            {!isBuy && <div className='pumping'></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSubmit;
