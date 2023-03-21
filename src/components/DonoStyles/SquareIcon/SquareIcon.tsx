import React, { useState } from 'react';
import ConnectedIcon from './ConnectedIcon/ConnectedIcon';
import InternetSpeedIcon from './InternetSpeedIcon/InternetSpeedIcon';
import LogOutIcon from './LogOutIcon/LogOutIcon';
import MenuIcon from './MenuIcon/MenuIcon';
import ProfileIcon from './ProfileIcon/ProfileIcon';
import './SquareIcon.scss';

type SquareIconTypes = 'menuIcon' | 'logOutIcon' | 'conectedIcon' | 'internetSpeedIcon' | 'profileIcon';
type TypeMap = {
  [K in SquareIconTypes]: React.FC<Props>;
};

interface Props {
  type: SquareIconTypes;
  relatedData?: string;
}
const SquareIcon: React.FC<Props> = ({ type, relatedData }) => {
  const squareIcon: TypeMap = {
    menuIcon: MenuIcon,
    logOutIcon: LogOutIcon,
    conectedIcon: ConnectedIcon,
    internetSpeedIcon: InternetSpeedIcon,
    profileIcon: ProfileIcon,
  };
  const Element = squareIcon[type];
  return (
    <div className='square__icon'>
      <Element type={type}></Element>
    </div>
  );
};

export default SquareIcon;
