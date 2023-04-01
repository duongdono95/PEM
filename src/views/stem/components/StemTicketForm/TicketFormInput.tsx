import React, { useEffect, useState } from 'react';
import GraphicIcon from 'components/DonoStyles/GraphicIcon/GraphicIcon';
import TextIcon from 'components/DonoStyles/TextIcon/TextIcon';

const TicketFormInput = () => {
  const initialForm = {
    bidVol: '0',
    bidPrice: '0',
  };
  const increasementSteps = ['1', '3', '5', '10'];
  const [inputData, setInputData] = useState(initialForm);
  const handleIncreasement = (a: string, b: string) => {
    const sum = parseInt(a) + parseInt(b);
    setInputData(prev => ({ ...prev, bidVol: sum.toString() }));
    console.log(inputData);
  };

  useEffect(() => {
    setInputData(inputData);
  }, [inputData]);
  return (
    <div className='inputs'>
      <div className='inputs-left'>
        <div className='input vol'>
          <div className='title'>
            <label htmlFor='bid__price'>Bid</label>
            <TextIcon priceDetails='v' />
          </div>
          <input
            min={0}
            type='number'
            id='bid__price'
            value={inputData.bidVol}
            onChange={e => {
              setInputData(prev => ({ ...prev, bidVol: e.target.value }));
            }}
          />
        </div>
        <div className='input price'>
          <div className='title'>
            <label htmlFor='bid__vol'>Bid</label>
            <TextIcon priceDetails='p' />
          </div>
          <input
            value={inputData.bidPrice}
            min={0}
            type='number'
            id='bid__vol'
            onChange={e => {
              setInputData(prev => ({ ...prev, bidPrice: e.target.value }));
            }}
          />
        </div>
      </div>
      <div className='inputs-right'>
        {increasementSteps.map((step, index) => {
          return (
            <div key={index} className='step' onClick={() => handleIncreasement(step, inputData.bidVol)}>
              <p>+{step}</p>
            </div>
          );
        })}
        <div
          className='reset'
          onClick={() => {
            setInputData(prev => ({ ...prev, bidPrice: '0', bidVol: '0' }));
          }}
        >
          <GraphicIcon type='reset' />
        </div>
      </div>
    </div>
  );
};

export default TicketFormInput;
