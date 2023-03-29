import React, { Fragment } from 'react';
import './TextIcon.scss';

interface Props {
  note?: string;
  status?: string;
  scale?: number;
  priceDetails?: 'p' | 'v' | 'l';
  contract?: string;
}

const TextIcon: React.FC<Props> = props => {
  const { scale, ...prop } = props;
  const iconType = Object.keys(prop).toString();
  const iconValue = Object.values(prop).toString();

  return (
    <Fragment>
      <div style={scale ? { transform: `scale(${scale})` } : { transform: 'scale(1)' }} className='text-icon'>
        <div className={`${iconType} ${iconValue.toLowerCase()}`}>
          <span>{iconValue.toUpperCase()}</span>
        </div>
      </div>
    </Fragment>
  );
};

export default TextIcon;
