import GraphicIcon from 'components/DonoStyles/GraphicIcon/GraphicIcon';
import React from 'react';
import data from '../../StemCreditControl.json';

const StemCreditControl = () => {
  console.log(data);
  return (
    <>
      <div className='tools'>
        <GraphicIcon type='add' />
        <GraphicIcon type='edit' />
      </div>
      <div className='credit__control'>
        <div className='table'>
          <div className='thead'>
            <div className='tr'>
              <div className='td'>Counterparties</div>
              <div className='td'>Credit Limit</div>
            </div>
          </div>
          <div className='tbody'>
            {data.map((item, index) => {
              return (
                <div key={index} className='tr'>
                  <div className='td'>
                    <p className='name'>{item.client}</p>
                  </div>
                  <div className='td'>
                    <p className='credit'>{item.creditLimit}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default StemCreditControl;
