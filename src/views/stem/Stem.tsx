import React, { useState, useEffect } from 'react';
import StemEX from './components/StemEX/StemEX';
import './Stem.scss';
import data from './StemData.json';
import StemManagement from './components/StemManagement/StemManagement';
import StemTradingBoard from './components/StemTradingBoard/StemTradingBoard';
import GlobalStyles from 'GlobalStyles/GlobalStyles';
import StemFavorite from './components/StemFavorite/StemFavorite';
import StemTicketForm from './components/StemTicketForm/StemTicketForm';
import { TicketDetails } from 'types/stem.types';
import DynamicBox from './components/DynamicBox/DynamicBox';
const Stem = () => {
  const labelArray = Object.keys(data);
  const valueArray = Object.values(data);
  const regions = ['OTA', 'BEN'];

  // --------------- useStates
  const [activeIndex, setActiveIndex] = useState(0);
  const [ticketFrom, setTicketForm] = useState(false);
  const [ticketDetails, setTicketDetails] = useState<TicketDetails>();

  // ----------------- functions

  return (
    <GlobalStyles>
      <div className='stem'>
        {ticketFrom && <StemTicketForm data={ticketDetails} openTicketForm={setTicketForm} />}
        <div className='stem__head'>
          <DynamicBox title='Management' content={<StemManagement />} />
          <DynamicBox title='Trading Board' content={<StemTradingBoard />} />
          <DynamicBox title='Favorite' content={<StemFavorite />} />
        </div>
        <div className='stem__body'>
          <div className='stem__regions'>
            {regions.map((region, index) => {
              return (
                <div
                  onClick={() => {
                    setActiveIndex(index);
                  }}
                  key={index}
                  className={activeIndex !== index ? 'region inactive' : 'region'}
                >
                  <p>{region}</p>
                </div>
              );
            })}
          </div>
          <div className='stem__exs'>
            {valueArray.map((ex, index: number) => {
              return (
                <React.Fragment key={index}>
                  <StemEX openTicketForm={setTicketForm} handleTicketDetails={setTicketDetails} label={labelArray[index]} data={ex} date={ex.date} />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </GlobalStyles>
  );
};

export default Stem;
