import React, { useState } from 'react';
import { StyledDropdown, StyledInput, StyledDropdownWrapper } from '../../styles';
import SelectedOptions from './SelectedOptions';
import Suggestions from './Suggestions';
import Button from '@material-ui/core/Button';
import { updateSubscriptions } from '../../actions/subscription';
import useLocalStorage from '../../hooks/useLocalStorage';
import { changePage } from '../../actions/page';
import PAGES from '../../constants/pages';

const Dropdown = ({ closePopup }) => {
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState('');
  
  const [chipsLS, setChipsLS] = useLocalStorage('chips', []);
  const [chips, setChips] = useState(chipsLS);
  const [options, setOptions] = useState(['test', 'test2', 'test3', 'test4']); 
  
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
      return <SelectedOptions chips={ chips } onDelete={ removeChip }/>
    }
  };
  
const onSubmit = () => {
  // update chips in Redux
  dispatch(updateSubscriptions(chips));
  // update chips in localstorage
  setChipsLS(chips);
  // close popup
  setActive(false);
  // redirect to first page
  dispatch(changePage(PAGES.FIRST_PAGE))
  
};
  return (
    <>
      <StyledDropdownWrapper className="dropdown-wrapper">
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
      </StyledDropdownWrapper>
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