import React, { useState } from 'react';
import '../SquareIcon.scss';

interface Props {
  menuExpanded?: boolean;
}
const MenuIcon = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  return (
    <div
      onClick={() => {
        setMenuExpanded(!menuExpanded);
      }}
      className='menu__icon'
    >
      <div className='bar'></div>
      <div style={menuExpanded ? { width: '70%' } : { width: '16px' }} className='bar'></div>
      <div style={menuExpanded ? { width: '40%' } : { width: '16px' }} className='bar'></div>
    </div>
  );
};

export default MenuIcon;
