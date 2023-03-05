import React, { useState } from 'react';

const SelectIcon = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      onClick={() => {
        setIsSelected(!isSelected);
      }}
      style={isSelected ? { backgroundColor: '#57B6B2' } : { backgroundColor: 'rgb(177, 177, 177)' }}
      className='select__icon'
    ></div>
  );
};

export default SelectIcon;
