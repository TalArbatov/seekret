import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;
 
export const StyledNav = styled.div`
  width: 100vw;
  height: 60px;
  background-color: #e3463b;
  display: flex;
  align-content: center;
  color: white;
  .img-container {
    
    display: flex;
    display: inline-flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
    img {
      width: 30px;
    }
  }
  .title-container {  
    font-weight: 100;
    font-size: 20px;
    box-sizing: border-box;
    display: inline-flex;
    padding: 15px;
    flex-direction: row;   
    align-items: center;
    height: 100%;
  }
  .button-container {
    margin-left: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .menu-button {
      margin-right: 15px;
      height: 100%;
      box-sizing: border-box;
      vertical-align: middle;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 10px;
      transition: 0.5s;
    }
    .menu-button:hover {
      background-color: #e05c53;
    }
  }
`;

export const StyledPopup = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;

  .popup-window {
    overflow: hidden;
    animation: windowFadeIn ease-in 0.5s;
    position: relative;
    margin: 0 auto;
    width: 50%;

    height: 50%;
    max-height: 70vh;
    margin-top: calc(100vh - 85vh - 20px);
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    border: 1px solid #999;
  
  }
  .close-popup {
    content: 'x';
    cursor: pointer;
    width: 25px;
    height: 25px;
    font-size: 20px;  
  }
  .popup-content {
    animation: textFadeIn ease-in 1s;
    height: 90%;
    form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }
  }
  .on-close {
    animation: textFadeOut ease-in 0.5s;
  }
  @keyframes windowFadeIn{
    0% {
      width: 0;
      height: 0;
    }
    100% {
      width: 50%;
      height: 50%;
    }
  }

  @keyframes textFadeIn{
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }

  @keyframes textFadeOut{
    0% {
      width: 50%;
      height: 50%;
      opacity: 100%;
    }
    50% {
      width: 50%;
      height: 50%;
      opacity: 0;
    }
    100% {
      width: 0;
      height: 0;
      opacity: 0;
    }
  }
`;

export const StyledDropdown = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 50px;
  border: 1px solid #efefef;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;

  .chip {
    margin-left: 5px;
  }
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  width: 100%;
  height: 100%;
`;

export const StyledSuggestion = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid #efefef;
  border-top: none;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 17px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #fafafa;
  }
`;

export const Content = styled.div`
  margin: 60px 0 30px 60px;
`;

export const StyledTitle = styled.div`
  span {
    font-size: 30px;
  }
`;
