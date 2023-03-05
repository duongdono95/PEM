import React, { useState } from 'react';
import '../GraphicIcon.scss';
interface Props {
  scale?: number;
  color?: string;
  fill?: string;
}
const StarIcon: React.FC<Props> = ({ fill, color }) => {
  const [favorite, setFavorite] = useState(false);
  const toggleStatus = () => {
    setFavorite(!favorite);
  };
  return (
    <div onClick={toggleStatus} className='icon__container'>
      <svg width='24' height='24' viewBox='0 0 24 24' stroke={favorite ? '#FFC700' : 'white'} fill={favorite ? '#FFC700' : 'white'} xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M10.6549 4.72495C11.2052 3.61019 12.7948 3.61019 13.3451 4.72495L14.7413 7.55364C14.9596 7.99591 15.3814 8.3026 15.8694 8.37393L18.9943 8.83068C20.2242 9.01044 20.7144 10.5222 19.824 11.3894L17.5652 13.5895C17.2114 13.9341 17.0499 14.4308 17.1334 14.9176L17.6661 18.0239C17.8763 19.2494 16.59 20.1838 15.4896 19.6051L12.6982 18.1372C12.2611 17.9073 11.7389 17.9073 11.3018 18.1372L8.51045 19.6051C7.41001 20.1838 6.12368 19.2494 6.33386 18.0239L6.86663 14.9176C6.95012 14.4308 6.78863 13.9341 6.43482 13.5895L4.17602 11.3894C3.28563 10.5222 3.7758 9.01044 5.00568 8.83068L8.13055 8.37393C8.61858 8.3026 9.04036 7.99591 9.25867 7.55364L10.6549 4.72495Z'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
};

export default StarIcon;
