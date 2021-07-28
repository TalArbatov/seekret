import React from 'react';
import { StyledPopup } from '../styles';
import Dropdown from './Dropdown/Dropdown';
 
const Popup = ({
  closePopup,
  customClass
}) => {
  return (
    <StyledPopup className="popup-background">
      <div className={ `popup-window ${ customClass }` }>
        <span className="close-popup" onClick={ closePopup }>x</span>
        <div className="popup-content">
        <form>          
          <Dropdown closePopup={ closePopup }/>
        </form>
        </div>
      </div>
    </StyledPopup>
  );
};
 
export default Popup;