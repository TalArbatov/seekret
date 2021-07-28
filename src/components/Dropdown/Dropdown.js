import React, { useState, useRef } from 'react';
import { StyledDropdown, StyledInput, StyledDropdownWrapper } from '../../styles';
import SelectedOptions from './SelectedOptions';
import Suggestions from './Suggestions';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { removeSubscription, updateSubscriptions } from '../../actions/subscription';
import useLocalStorage from '../../hooks/useLocalStorage';
import { changePage } from '../../actions/page';
import PAGES from '../../constants/pages';

const Dropdown = ({ closePopup }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState('');
  // const [chips, setChips] = useState(['hello', 'world', 'bunch of chips', 'testststest', 'test', 'tetst', 'tststst', 'testststest', 'test', 'tetst', 'last', 'afterlast'])
  // const searchInput = React.useRef(null);
  // const chipsMem = useSelector(state => state.subscription.subscriptions);
  // const optionsMem = useSelector(state => state.subscription.options);

  // TODO useLocalStorage
  
  const [chipsLS, setChipsLS] = useLocalStorage('chips', []);
  const [chips, setChips] = useState(chipsLS);
  const [options, setOptions] = useState(['test', 'test2', 'test3', 'test4']); 
  
  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const removeChip = subscription => {    
    // dispatch(removeSubscription(subscription));
    setChips(chips.filter(chip => chip !== subscription))
  };

  const addChip = suggestion => {
    setChips([suggestion, ...chips]);
    // dispatch(addSubscription(suggestion));
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