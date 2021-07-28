import React from 'react';
import { StyledSuggestion } from '../../styles';

const Suggestion = ({
  suggestion,
  deactivateDropdown,
  onAdd
}) => {
  const onSuggestionAdd = () => {
    deactivateDropdown();
    onAdd(suggestion);
  };

  return (
    <StyledSuggestion onClick={ onSuggestionAdd }>
      <span >{ suggestion }</span>
    </StyledSuggestion>
  );
};

export default Suggestion;