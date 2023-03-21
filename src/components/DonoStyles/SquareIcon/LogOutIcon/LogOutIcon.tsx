import React from 'react';

const LogOutIcon = () => {
  return (
    <div className='logout__icon'>
      <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M5 13H2.33333C1.97971 13 1.64057 12.8595 1.39052 12.6095C1.14048 12.3594 1 12.0203 1 11.6667V2.33333C1 1.97971 1.14048 1.64057 1.39052 1.39052C1.64057 1.14048 1.97971 1 2.33333 1H5'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path d='M9.66675 10.3334L13.0001 7.00002L9.66675 3.66669' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M13 7H5' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    </div>
  );
};

export default LogOutIcon;
