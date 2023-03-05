import React, { useState } from 'react';
import '../GraphicIcon.scss';

interface Props {
  color?: string;
  fill?: string;
}
const TicketIcon: React.FC<Props> = ({ color, fill }) => {
  const [bookedTicket, setBookedTicket] = useState(false);
  return (
    <div className='icon__container'>
      {bookedTicket && (
        <svg className='check-icon' width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect x='0.0689087' y='0.202148' width='10' height='10' rx='5' fill='#46C818' />
          <path d='M7 4L4.25 6L3 5.09091' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )}

      <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M11.7659 4.84043C11.5785 4.65301 11.2893 4.63826 11.1201 4.8075L4.80748 11.1201C4.63824 11.2893 4.65298 11.5785 4.84041 11.7659L5.68882 12.6143C6.11192 12.1912 6.83475 12.2281 7.30332 12.6966C7.77188 13.1652 7.80874 13.888 7.38564 14.3111L8.23405 15.1595C8.42147 15.347 8.7106 15.3617 8.87985 15.1925L15.1924 8.87987C15.3617 8.71063 15.3469 8.4215 15.1595 8.23407L14.3111 7.38566C13.888 7.80876 13.1652 7.77191 12.6966 7.30334C12.228 6.83478 12.1912 6.11194 12.6143 5.68884L11.7659 4.84043Z'
          fill={fill ? fill : 'white'}
        />
        <rect x='0.75' y='0.75' width='18.5' height='18.5' rx='9.25' stroke={color ? color : 'white'} strokeWidth='2' />
      </svg>
    </div>
  );
};

export default TicketIcon;
