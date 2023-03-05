import React, { useState } from 'react';
import '../GraphicIcon.scss';

interface Props {
  scale?: number;
  color?: string;
  backgroundColour?: string;
}
const ChevonIcon: React.FC<Props> = ({ color, backgroundColour }) => {
  const [collapse, setCollapse] = useState(false);
  const toggleStatus = () => {
    setCollapse(!collapse);
  };
  return (
    <div onClick={toggleStatus} className={collapse ? 'icon__container' : 'icon__container icon-flip'}>
      <svg width='16' height='14' viewBox='0 0 16 14' fill={backgroundColour ? backgroundColour : 'transparent'} xmlns='http://www.w3.org/2000/svg'>
        <path d='M11.8219 8.75L7.88129 5.25L3.94067 8.75' stroke={color ? color : 'white'} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    </div>
  );
};

export default ChevonIcon;
