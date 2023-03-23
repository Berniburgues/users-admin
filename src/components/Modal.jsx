import React from 'react';

const Modal = ({ isVisible, children }) => {
  return (
    <>
      {isVisible && (
        <div className="flex flex-row justify-center items-center absolute inset-0 bg-[rgb(0_0_0_/_0.5)]">
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
