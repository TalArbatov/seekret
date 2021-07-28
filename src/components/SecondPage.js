import React, { useState } from 'react';
import Popup from './Popup';

const SecondPage = () => {
  const [popupActive, setPopupActive] = useState(false);
  const [popupClass, setPopupClass] = useState('');
  const closePopup = () => {
    setPopupClass('on-close')
    setTimeout(() => {
      setPopupActive(false);
    }, 300)
  };

  const openPopup = () => {
    setPopupClass('');
    setPopupActive(true);
  }

  return (
    <div>
      <button onClick={ openPopup }>Subscribe to our channel!</button>
      { popupActive && <Popup closePopup={ closePopup } customClass={ popupClass } /> }
    </div>
  )
};

export default SecondPage;