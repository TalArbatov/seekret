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
        {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
        <form>
          
          <Dropdown closePopup={ closePopup }/>
        </form>
        </div>
      </div>
    </StyledPopup>
  );
};
 
export default Popup;