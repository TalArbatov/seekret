import React from 'react';
import Chip from '@material-ui/core/Chip';
import { removeSubscription } from '../../actions/subscription';

const SelectedOptions = ({
  chips = [],
  onDelete
}) => {
  const getMaxChips = chips => {
    const slicedChips = [...chips].slice(0, 5);
    const hiddenChips = [...chips.slice(5, chips.length)].length;
    slicedChips.push(`${hiddenChips} more`);
    return slicedChips;
  }

  return (
    <div>
      { getMaxChips(chips).map((chip, index) => <Chip className="chip" key={ index } label={ chip } onDelete={ () => onDelete(chip) }/>) }
    </div>
  )
};

export default SelectedOptions;