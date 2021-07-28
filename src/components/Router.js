import React from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import { useSelector } from 'react-redux';
import PAGES from '../constants/pages';

const Router = () => {
  const page = useSelector( state => state.page.page);
  const renderPage = () => {
    switch(page) {
      case PAGES.FIRST_PAGE:
        return <FirstPage />
      case PAGES.SECOND_PAGE:
      default:
        return <SecondPage />
    }
  }
  return (
    <div>
      { renderPage() }
    </div>
  )
};

export default Router;