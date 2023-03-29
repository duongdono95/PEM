import GraphicIcon from 'components/DonoStyles/GraphicIcon/GraphicIcon';
import React, { useState, useRef, useEffect } from 'react';

interface Props {
  role: string;
}

const Submitter: React.FC<Props> = ({ role }) => {
  const [isBuy, setIsBuy] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);

  const roles = {
    buyer: {},
    seller: {},
  };
  const rolesArray = Object.entries(roles);
  console.log(roles);
  return <div ref={containerRef} className='submitter__container'></div>;
};

export default Submitter;
