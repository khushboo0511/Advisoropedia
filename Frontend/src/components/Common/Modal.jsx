import React from 'react';

function Modal({ showModal, closeHandler, children }) {
  if (!showModal) return null;

  const outsideClickHandler = (e) => {
    if (e.target.id === 'modalbg') closeHandler();
  };

  return (
    <div onClick={outsideClickHandler} id='modalbg' className='fixed inset-0 bg-gray-900 bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-50'>
      {children}
    </div>
  );
}

export default Modal;
