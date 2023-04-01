import React, { useState, useEffect, useRef } from 'react';
import PaperPlane from 'components/DonoStyles/GraphicIcon/PaperPlane/PaperPlane';

const Submitter = () => {
  const [activeRole, setActiveRole] = useState('buyer');
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [counter, setCounter] = useState(0);
  const [processSubmit, setProcessSubmit] = useState(0);

  const roles = ['buyer', 'seller'];
  const changeRole = (role: string) => {
    setActiveRole(role);
  };

  useEffect(() => {
    if (isMouseDown && counter < 10) {
      const timer = setInterval(() => {
        setCounter(prev => prev + 1);
      }, 200);
      return () => clearInterval(timer);
    } else {
      setCounter(0);
    }
  }, [isMouseDown]);
  useEffect(() => {
    if (isMouseDown && processSubmit < 380) {
      setProcessSubmit((380 / 10) * counter);
    }
    if (isMouseDown && processSubmit >= 380) {
      setProcessSubmit(380);
      setCounter(0);
    }
    if (!isMouseDown && processSubmit < 380) {
      setProcessSubmit(0);
      setCounter(0);
    }
  }, [counter]);

  return (
    <div className='submitter__container'>
      <div className='roles noselect'>
        {roles.map((role, index) => {
          return (
            <p key={index} className={role} style={role === activeRole ? { opacity: 1 } : { opacity: 0.5 }} onClick={() => changeRole(role)}>
              {role === 'buyer' ? 'Buyer' : 'Seller'}
            </p>
          );
        })}
      </div>
      <div className='submitter' style={{ backgroundColor: `var(--${activeRole})` }}>
        <div className='slide-bar'>
          <div className='increasement-bar' style={{ width: `${processSubmit}px` }}></div>
          <div className='handler-container'>
            <p onMouseDown={() => setIsMouseDown(true)} onMouseUp={() => setIsMouseDown(false)} style={{ color: `var(--${activeRole})` }} className='handler noselect'>
              {activeRole === 'buyer' ? 'B' : 'S'}
            </p>
          </div>
          <p className='noselect'>
            {counter} {processSubmit}
          </p>
          <div className='drop-zone'>
            <PaperPlane />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submitter;
