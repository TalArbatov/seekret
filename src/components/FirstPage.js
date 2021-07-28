import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../actions/page';
import PAGES from '../constants/pages';
import useLocalStorage from '../hooks/useLocalStorage';

const FirstPage = () => {
  const dispatch = useDispatch();
  // const chips = useSelector(state => state.subscription.subscriptions)
  const [chips] = useLocalStorage('chips', []);
  const postSubscription = useSelector(state => state.page.postSubscription);
  
  const subscriptions = chips.length === 0 ? 'You have no subscriptions' : `Your subscriptions are ${chips.join(', ')}`;

  const renderMessage = () => {
    if (postSubscription) {
      return <p>{ subscriptions }</p>;
    } else {
      return <p>Welcome! Please visit the <a href="#" onClick={ () => dispatch(changePage(PAGES.SECOND_PAGE, postSubscription)) }>second page.</a></p>;
    }
  }
  return (
    <div>
      { renderMessage() }
      {/* { renderChips() } */}
    </div>
  )
};

export default FirstPage;