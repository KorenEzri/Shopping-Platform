import styled from 'styled-components';

export const Styled = styled.div`
  box-shadow: 1px 1px 3px black;
  width: 250px;
  position: relative;
  right: 16.5px;
  margin-bottom: -50px;
  top: -80px;
  z-index: 9999 !important;
  #wrap {
    max-width: 1140px;
    margin: 0 auto;
  }

  .cart-notify .panel-body {
    padding: 0;
    background: #f0f0f0;
  }
  .cart-notify .cart-item {
    padding: 6px;
    border-right: 1px solid #c0c0c0;
    background: #fcfcfc;
  }
  .cart-notify .cart-item h4 {
    display: inline-block;
    margin: 0.25em 6px 0.25em 0;
  }
  .cart-notify .cart-details {
    padding: 15px;
  }
  .cart-notify .cart-details h4 {
    font-weight: normal;
    margin: 0.25em 0;
  }
  .cart-notify .cart-buttons {
    padding: 13px;
  }
  .cart-notify .popover {
    width: 28em;
    max-width: 320px;
  }
  @media (max-width: 320px) {
    .cart-notify .cart-buttons a.btn {
      font-size: 0.85em;
    }
  }
  @media (max-width: 768px) {
    .cart-notify .cart-details,
    .cart-notify .cart-buttons {
      float: none;
      width: 100%;
      text-align: center;
    }
    .cart-notify .cart-details {
      padding-bottom: 0;
    }
    .cart-notify .cart-item a {
      float: right;
    }
    .cart-notify .cart-item h4 {
      margin: 0.7em 0 !important;
    }
    .cart-notify .cart-item {
      float: none;
      width: 100%;
      border-right: 0 !important;
      padding: 15px !important;
    }
  }
`;
export const StyledProceedButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #8bba61;
  background: linear-gradient(to bottom, #89bd0f 5%, #749e11 100%);
  background-color: #89bd0f;
  border-radius: 6px;
  border: 1px solid #72ad0c;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  padding: 6px 22px;
  text-decoration: none;
  box-shadow: 1px 1px 3px black;
  text-shadow: 0px 1px 0px #6ca30d;
  &:hover {
    background: linear-gradient(to bottom, #749e11 5%, #89bd0f 100%);
    background-color: #749e11;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
export const StyledCartButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
  background-color: #f9f9f9;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #666666;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 19px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
  margin-left: 80px;
  margin-bottom: 12px;
  box-shadow: 1px 1px 3px black;
  &:hover {
    background: linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
    background-color: #e9e9e9;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
