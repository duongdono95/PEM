import React from 'react';
import GraphicIcon from 'components/DonoStyles/GraphicIcon/GraphicIcon';
import TextIcon from 'components/DonoStyles/TextIcon/TextIcon';

const TicketFormInput = () => {
  return (
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
  );
};

export default TicketFormInput;
