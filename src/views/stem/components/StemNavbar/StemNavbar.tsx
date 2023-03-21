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
          <NameDisplayer type='user' render='User Name' />
        </div>
        <div className='item'>
          <SquareIcon type='conectedIcon' />
          <p>Disconnected</p>
        </div>
        <div className='item'>
          <SquareIcon type='internetSpeedIcon' />
          <p>Ping: 100ms</p>
        </div>
        <div className='item__group'>
          <div className='icon' onClick={() => setExpandedMenu(!expandedMenu)}>
            <SquareIcon type='menuIcon' />
          </div>
          {expandedMenu && (
            <div className='expanded__menu'>
              <div>
                <p>User Profile</p>
                <SquareIcon type='profileIcon' />
              </div>
              <div>
                <p>Profile</p>
                <SquareIcon type='logOutIcon' />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StemNavbar;
