import React from 'react';

interface Props {
  children: React.FC<Props>;
}

const IconExpander: React.FC<Props> = ({ children }) => {
  return <div className='icon__expander'></div>;
};

export default IconExpander;
