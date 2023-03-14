import React from 'react';
import './DynamicBox.scss';

interface Props {
  title: string;
  content: JSX.Element;
}

const DynamicBox: React.FC<Props> = props => {
  const { title, content } = props;
  return (
    <div className='dynamic-box'>
      <div className='dynamic-box__title'>{title}</div>
      <div className='dynamic-box__content'>{content}</div>
    </div>
  );
};

export default DynamicBox;
