import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../actions/page';
import PAGES from '../constants/pages';

const FirstPage = () => {
  const dispatch = useDispatch();
  const chips = useSelector(state => state.subscription.subscriptions)
  const renderChips = () => {
    return (
      <div>
        { chips.map((chip, index) => <p key={ index }>{ chip }</p>) }
      </div>
    )
  }
  return (
    <div>
      <p>Welcome! Please visit the <a href="#" onClick={ () => dispatch(changePage(PAGES.SECOND_PAGE)) }>second page.</a></p>
      { renderChips() }
    </div>
  )
};

export default FirstPage;