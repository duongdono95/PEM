import React from 'react';

const ProfileIcon = () => {
  return (
    <div className='profile__icon'>
      <svg width='14' height='15' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M13 13.5V12C13 11.4696 12.6839 10.9609 12.1213 10.5858C11.5587 10.2107 10.7956 10 10 10H4C3.20435 10 2.44129 10.2107 1.87868 10.5858C1.31607 10.9609 1 11.4696 1 12V13.5'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path d='M7 7C8.65685 7 10 5.65685 10 4C10 2.34315 8.65685 1 7 1C5.34315 1 4 2.34315 4 4C4 5.65685 5.34315 7 7 7Z' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    </div>
  );
};

export default ProfileIcon;
