import React, { useState } from 'react';

const ConnectedIcon = () => {
  const [connected, setConnected] = useState(false);
  return (
    <div className='connected__icon'>
      <svg width='20' height='15' viewBox='0 0 20 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M10.7879 5.3078V7.15904H8.93665' stroke={connected ? 'var(--high-speed)' : 'var(--low-speed)'} strokeLinecap='round' strokeLinejoin='round' />
        <path d='M4 10.2444V8.39319H5.85124' stroke={connected ? 'var(--high-speed)' : 'var(--low-speed)'} strokeLinecap='round' strokeLinejoin='round' />
        <path
          d='M4.77444 6.85051C4.93092 6.40831 5.19687 6.01295 5.54747 5.70133C5.89808 5.38971 6.32191 5.17198 6.77942 5.06846C7.23693 4.96495 7.7132 4.97901 8.16381 5.10935C8.61441 5.23969 9.02465 5.48205 9.35625 5.81382L10.7879 7.15905M4 8.39321L5.43163 9.73844C5.76323 10.0702 6.17347 10.3126 6.62407 10.4429C7.07468 10.5732 7.55095 10.5873 8.00846 10.4838C8.46597 10.3803 8.8898 10.1626 9.24041 9.85093C9.59101 9.53931 9.85696 9.14395 10.0134 8.70175'
          stroke={connected ? 'var(--high-speed)' : 'var(--low-speed)'}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M14.9102 5.875H13.8796C13.5735 4.69769 12.9412 3.62924 12.0544 2.79107C11.1676 1.9529 10.0619 1.37862 8.86296 1.13347C7.664 0.888331 6.41985 0.982158 5.2719 1.40429C4.12394 1.82643 3.1182 2.55995 2.36896 3.5215C1.61971 4.48305 1.15702 5.63407 1.03344 6.84379C0.909856 8.0535 1.13035 9.27339 1.66986 10.3648C2.20938 11.4563 3.04628 12.3755 4.08547 13.0181C5.12466 13.6607 6.32447 14.0009 7.54856 14H14.9102C15.9949 14 17.0351 13.572 17.8021 12.8101C18.5691 12.0483 19 11.0149 19 9.9375C19 8.86006 18.5691 7.82674 17.8021 7.06488C17.0351 6.30301 15.9949 5.875 14.9102 5.875Z'
          stroke={connected ? 'var(--high-speed)' : 'var(--low-speed)'}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
};

export default ConnectedIcon;
