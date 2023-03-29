import IconExpander from 'components/DonoStyles/IconExpander/IconExpander';
import NameDisplayer from 'components/DonoStyles/NameDisplayer/NameDisplayer';
import SquareIcon from 'components/DonoStyles/SquareIcon/SquareIcon';
import React, { useState } from 'react';
import './StemNavbar.scss';
const StemNavbar = () => {
  const [expandedMenu, setExpandedMenu] = useState(false);
  return (
    <div className='stem__navbar'>
      <div className='items'>
        <div className='user-details'>
          <NameDisplayer type='company' render='Company Name' />
          <p>User Name</p>
        </div>
        <div className='item'>
          <SquareIcon type='conectedIcon' />
          <p>Disconnected</p>
        </div>
        <div className='item'>
          <SquareIcon type='internetSpeedIcon' />
          <p>Ping: 100ms</p>
        </div>
        <div className='item'>
          <SquareIcon type='logOutIcon' />
          <p>Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default StemNavbar;
