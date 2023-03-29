import React from 'react';
import '../GraphicIcon.scss';
interface Props {
  product: string;
}
const ProductPie: React.FC<Props> = ({ product }) => {
  const rotateValue = (parseInt(product.replace('p', '')) - 1) * 90;

  return (
    <div className='product-pie'>
      {product !== 'baseload' ? (
        <div style={{ transform: `rotate(${rotateValue}deg)`, scale: '0.95' }} className='product-pie'>
          <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='8' fill='var(--white02)' cy='8' r='7' stroke='white' strokeWidth='2' />
            <path d='M8 0C9.05058 1.2528e-08 10.0909 0.206926 11.0615 0.608964C12.0321 1.011 12.914 1.60028 13.6569 2.34315C14.3997 3.08602 14.989 3.96793 15.391 4.93853C15.7931 5.90914 16 6.94943 16 8L8 8L8 0Z' fill='var(--signature)' />
          </svg>
        </div>
      ) : (
        <div className='baseload'>
          <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='8' cy='8' r='7' fill='var(--signature)' stroke='white' strokeWidth='2' />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ProductPie;
