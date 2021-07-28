import React, { useState, useRef, useEffect } from 'react';
import { StyledDropdown, StyledInput, StyledDropdownWrapper } from '../../styles';
import SelectedOptions from './SelectedOptions';
import Suggestions from './Suggestions';
import Button from '@material-ui/core/Button';
import { updateSubscriptions } from '../../actions/subscription';
import useLocalStorage from '../../hooks/useLocalStorage';
import { changePage } from '../../actions/page';
import { useDispatch } from 'react-redux';
import PAGES from '../../constants/pages';
import SUGGESTIONS from '../../constants/suggestions.json';

const Dropdown = ({ closePopup }) => {
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);
  const [search, setSearch] = useState('');
  const [chipsLS, setChipsLS] = useLocalStorage('chips', []);
  const [chips, setChips] = useState(chipsLS);
  const [options, setOptions] = useState(SUGGESTIONS); 
  const [width, setWidth] = useState(0);
  const dropdown = useRef(null);

  useEffect(() => {
    setWidth(dropdown.current.offsetWidth)
  }, [dropdown.current]);

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const removeChip = subscription => {    
    setChips(chips.filter(chip => chip !== subscription))
  };

  const addChip = suggestion => {
    setChips([suggestion, ...chips]);
  };

  const renderContent = () => {
    if (active) {
      return <StyledInput onChange={ handleSearch }autoFocus type="text" placeholder="type here" />
    } else {
      return <SelectedOptions chips={ chips } onDelete={ removeChip } dropdownWidth={ width }/>
    }
  };
  
const onSubmit = () => {
  // update chips in Redux
  dispatch(updateSubscriptions(chips));
  // update chips in localstorage
  setChipsLS(chips);
  // close popup
  setActive(false);
  // redirect to first page (postSubscription)
  dispatch(changePage(PAGES.FIRST_PAGE, true));
  
};

  // TODO: width is temporarily 500px since the change in width interrupts ref.current.offsetWidth
  return (
    <>
      <div className="dropdown-wrapper" ref={ dropdown } style={ { width: '500px' } }>
        <StyledDropdown onClick={ () => setActive(true) }>
          { renderContent() }
        </StyledDropdown>
        { active &&
          <Suggestions 
            search={ search } 
            options={ options } 
            closePopup={ closePopup }
            onAdd={ addChip }
            deactivateDropdown={ () => setActive(false) }
          />}
      </div>
      <Button 
        style={ { width: 'fit-content', backgroundColor: '#e3463b' } } 
        onClick={ onSubmit }
        variant="contained" 
        color="primary">
        Submit
      </Button>
    </>
  )
};

export default Dropdown;