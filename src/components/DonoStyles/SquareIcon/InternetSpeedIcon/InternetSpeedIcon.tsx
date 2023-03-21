import React, { useState } from 'react';

const InternetSpeedIcon = () => {
  const [internetSpeed, setInternetSpeed] = useState('medium');
  return (
    <div className='internet-speed__icon'>
      <svg width='17' height='14' viewBox='0 0 17 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M3.5 7.5C4.90381 6.20768 7.17302 5.5 9 5.5C10.827 5.5 12.5962 6.20768 14 7.5'
          stroke={internetSpeed === 'high' ? 'var(--high-speed)' : internetSpeed === 'medium' ? 'var(--medium-speed)' : 'white'}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path d='M1 4C3.07166 2.06669 5.7384 1 8.5 1C11.2616 1 13.9283 2.06669 16 4' stroke={internetSpeed === 'high' ? 'var(--high-speed)' : 'white'} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path
          d='M6 10C6.73036 9.34949 7.60408 9 8.5 9C9.39592 9 10.2696 9.34949 11 10'
          stroke={internetSpeed === 'high' ? 'var(--high-speed)' : internetSpeed === 'medium' ? 'var(--medium-speed)' : 'var(--low-speed)'}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path d='M8.48999 13H8.49999' stroke={internetSpeed === 'high' ? 'var(--high-speed)' : internetSpeed === 'medium' ? 'var(--medium-speed)' : 'var(--low-speed)'} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    </div>
  );
};

export default InternetSpeedIcon;
