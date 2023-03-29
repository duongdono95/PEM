import GraphicIcon from 'components/DonoStyles/GraphicIcon/GraphicIcon';
import React, { useState, useRef, useEffect } from 'react';

interface Props {
  role: string;
}

const Submitter: React.FC<Props> = ({ role }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={containerRef} className='submitter' style={{ backgroundColor: `var(--${role})` }}>
      <div className='slider'>
        <div className='handler-container'>
          <p style={{ color: `var(--${role})` }} className='handler'>
            {role === 'buyer' ? 'B' : 'S'}
          </p>
        </div>
        <p>Drag to Submit</p>
        <div className='drop-zone'>
          <GraphicIcon type='paperPlane' />
        </div>
      </div>
    </div>
  );
};

export default Submitter;
