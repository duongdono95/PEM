import React, { useState } from 'react';
import './SwitchIcon.scss';
const SwitchIcon = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className='switch__icon'
    >
      <div style={isActive ? { backgroundColor: 'white', left: '-5%' } : { backgroundColor: 'rgb(177, 177, 177)', left: '35%' }} className='switch__handler'>
        <div style={isActive ? { backgroundColor: 'var(--signature)' } : { backgroundColor: 'white' }} className='pause__bar'></div>
        <div style={isActive ? { backgroundColor: 'var(--signature)' } : { backgroundColor: 'white' }} className='pause__bar'></div>
      </div>
      <div style={isActive ? { backgroundColor: 'var(--signature)' } : { backgroundColor: 'white' }} className='switch__slider'></div>
    </div>
  );
};

export default SwitchIcon;
