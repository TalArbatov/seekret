import React, { useState } from 'react';
import Popup from './Popup';
import Button from '@material-ui/core/Button';

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
      <Button 
        style={ { width: 'fit-content', backgroundColor: '#e3463b', marginTop: '25px' } } 
        onClick={ openPopup }
        variant="contained" 
        color="primary">
        Subscribe to our channel
      </Button>
      { popupActive && <Popup closePopup={ closePopup } customClass={ popupClass } /> }
    </div>
  )
};

export default SecondPage;