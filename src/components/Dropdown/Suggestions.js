import React from 'react';
import Suggestion from './Suggestion';

const Suggestions = ({
  search,
  options,
  deactivateDropdown,
  onAdd
}) => {
  const suggestedOptions = options.filter(options => {
    return options.includes(search)
  }).slice(0, 3);
  return (
    <div>
      { suggestedOptions.map((options, index) => 
        <Suggestion 
          key={ index } 
          suggestion={ options } 
          deactivateDropdown={ () => deactivateDropdown() }
          onAdd={ onAdd }
        />) }
    </div>
  );
}

export default Suggestions;