import React, { useCallback, useState, useRef } from 'react';

import './Hovel.css';

const HovelWrapper = ({ actionComponent, children }) => {
  const hoboRef = useRef();
  const [isOffscreen, togglePosition] = useState(false);

  const handleShow = useCallback(() => {
    const hoboRect = hoboRef.current.getBoundingClientRect();
    togglePosition(hoboRect.top < 22);
  }, [hoboRef]);

  return (
    <div ref={hoboRef} onMouseOver={handleShow} className="HovelHobo">
      <div className={`HovelFab${isOffscreen ? ' HovelFab--bottom' : ''}`}>
        {actionComponent}
      </div>
      {children}
    </div>
  );
};

const Hovel = ({ children }) => {
  const handleAction = useCallback(() => {
    window.alert('action!');
  }, []);

  return React.Children.map(children, (child) => (
    <HovelWrapper actionComponent={
      <div onClick={handleAction}>+</div>
    }>{child}</HovelWrapper>
  ));
};

export default Hovel;
