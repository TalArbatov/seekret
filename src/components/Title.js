import React from 'react';
import { useSelector } from 'react-redux';
import PAGES from '../constants/pages';
import { StyledTitle } from '../styles';

const Title = () => {
  const page = useSelector(state => state.page.page);
  const getTitle = () => {
    switch(page) {
      case PAGES.FIRST_PAGE:
        return 'First Page';
      case PAGES.SECOND_PAGE:
      default:
        return 'Second Page'
    }
  }
  return (
    <StyledTitle className="app-title">
      <span>{ getTitle() }</span>
    </StyledTitle>
  )
};

export default Title;