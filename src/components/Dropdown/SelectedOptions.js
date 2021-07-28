import React, { useRef, useEffect, useState } from 'react';
import Chip from '@material-ui/core/Chip';
import { removeSubscription } from '../../actions/subscription';

const SelectedOptions = ({
  chips = [],
  onDelete,
  dropdownWidth = 0
}) => {
  const rowRef = useRef(null)
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(rowRef.current.offsetWidth);
  }, [rowRef.current])

  const hiddenChips = [...chips.slice(3, chips.length)].length;

  const getMaxChips = chips => {
    
    const slicedChips = [...chips].slice(0, 3);
    // slicedChips.push(`${hiddenChips} more`);
    return slicedChips;
  };

  return (
    <div ref={ rowRef }>
      { getMaxChips(chips).map((chip, index) => <Chip className="chip" key={ index } label={ chip } onDelete={ () => onDelete(chip) }/>) }
      { chips.length > 3 && <Chip className="chip" label={ `${ hiddenChips } more`} /> }
    </div>
  );
};

export default SelectedOptions;