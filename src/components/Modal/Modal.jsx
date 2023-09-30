import React, { useEffect } from 'react';

const Modal = ({ modal, src, setModal }) => {
  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      setModal(false);
    }
  }

  useEffect(() => {
    if (modal) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modal]);

  if (!modal) {
    return null; // Вернем null, когда модальное окно скрыто
  }

  const onClick = () => {
    setModal(false);
  };

  return (
    <div className="Overlay" onClick={onClick}>
      <div className="Modal">
        <img src={src} alt="Not found :(" />
      </div>
    </div>
  );
};

export default Modal;
