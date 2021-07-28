import React from 'react';
import Navbar from './Navbar';
import Router from './Router';
import { GlobalStyle } from '../styles';
import Title from './Title';
import { Content } from '../styles';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Content>
        <Title />
        <Router />
      </Content>
    </div>
  )
};

export default App;