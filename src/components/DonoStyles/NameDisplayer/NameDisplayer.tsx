import React, { useEffect } from 'react';

type NameDisplayer = 'user' | 'company';

interface Props {
  type: NameDisplayer;
  render: string;
}

const NameDisplayer: React.FC<Props> = ({ type, render }) => {
  const nameChecker = (render: string) => {
    const letterArray = render.split('');
    const renderedName = '';
    if (letterArray.length > 10 && type === 'company') {
      return (
        <p className='company'>
          {letterArray.slice(0, 3)}...<span> /</span>
        </p>
      );
    }
    if (letterArray.length > 4 && type === 'user') {
      return <p className='user'>{letterArray.slice(0, 5)}...</p>;
    } else {
      <p>{render}</p>;
    }
  };

  return <div>{nameChecker(render)}</div>;
};

export default NameDisplayer;
