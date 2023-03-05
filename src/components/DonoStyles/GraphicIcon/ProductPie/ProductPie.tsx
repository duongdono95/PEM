import React from 'react';
import '../GraphicIcon.scss';
interface Props {
  product: string;
}
const ProductPie: React.FC<Props> = ({ product }) => {
  const rotateValue = (parseInt(product.replace('p', '')) - 1) * 51;
  return (
    <>
      {product !== 'Baseload' ? (
        <div style={rotateValue ? { transform: `rotate(${rotateValue}deg)` } : { transform: 'rotate(0)' }} className='icon__container'>
          <svg width='20' height='20' viewBox='0 0 20 20' fill='transparent' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='10' cy='10' r='9' stroke='white' strokeWidth='2' fill='rgba(255, 255, 255, 0.0)' />
            <path d='M10 0C11.7554 2.09325e-08 13.4798 0.462062 15 1.33975C16.5202 2.21743 17.7826 3.47981 18.6603 5L10 10L10 0Z' fill='#57B6B2' />
          </svg>
        </div>
      ) : (
        <div className='icon__container'>
          <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='10' cy='10' r='9' fill='#57B6B2' stroke='white' strokeWidth='2' />
          </svg>
        </div>
      )}
    </>
  );
};

export default ProductPie;
