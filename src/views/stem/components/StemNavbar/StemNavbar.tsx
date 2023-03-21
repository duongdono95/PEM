import IconExpander from 'components/DonoStyles/IconExpander/IconExpander';
import SquareIcon from 'components/DonoStyles/SquareIcon/SquareIcon';
import React from 'react';
import './StemNavbar.scss';
const StemNavbar = () => {
  return (
    <div className='stem__navbar'>
      <SquareIcon type='menuIcon' />
      <SquareIcon type='logOutIcon' />
      <SquareIcon type='conectedIcon' />
      <SquareIcon type='internetSpeedIcon' />
      <SquareIcon type='profileIcon' />
    </div>
  );
};

export default StemNavbar;
