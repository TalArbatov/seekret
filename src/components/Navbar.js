import React from 'react';
import { StyledNav } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import PAGES from '../constants/pages';
import { changePage } from '../actions/page';

const Navbar = () => {
  const dispatch = useDispatch();
  const postSubscription = useSelector(state => state.page.postSubscription);

  return (
    <StyledNav>
      <div className="img-container">
        <img src="../../assets/gear.svg" />
      </div>
      <div className="title-container">
        <span>Seekret Assignment</span>
      </div>
      <div className="button-container">
        <div className="menu-button" onClick={ () => dispatch(changePage(PAGES.FIRST_PAGE, postSubscription)) }>
          <span>Page 1</span>
        </div>
        <div className="menu-button" onClick={ () => dispatch(changePage(PAGES.SECOND_PAGE, postSubscription)) }>
          <span>Page 2</span>
        </div>
      </div>
    </StyledNav>
  )
};

export default Navbar;