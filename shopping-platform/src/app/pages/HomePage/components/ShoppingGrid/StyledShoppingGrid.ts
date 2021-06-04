import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin: 30px;
  margin-top: 12px;
  margin-bottom: 12px;
`;
export const StyledProductWrapper = styled.div`
  background-color: white;
  img {
    width: 200px;
    height: 200px;
  }
  li {
    border: 1px solid lightgrey;
    border-radius: 4px;
    box-shadow: 0.2px 0.2px 1px;
  }
  margin: 5px;
`;
export const StyledProductBorder = styled.div`
  margin: auto;
  width: 75%;
`;
export const StyledDescription = styled.div`
  height: 115px;
  max-height: 115px;
  width: 220px;
  overflow-y: hidden;
  text-overflow: ellipsis;
`;
export const StyledBuyNowButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #8ab3e6;
  background: linear-gradient(to bottom, #367dc9 5%, #1851ad 100%);
  background-color: #367dc9;
  border: 1px solid #3077db;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #1262b3;
  &:hover {
    background: linear-gradient(to bottom, #1851ad 5%, #367dc9 100%);
    background-color: #1851ad;
  }
  &:active {
    position: relative;
    top: 1px;
  }
  margin-left: 37px;
  margin-bottom: 6px;
`;
export const StyledPriceTag = styled.div`
  position: relative;
  right: 15px;
  p {
    font-weight: bold;
  }
  span {
    position: relative;
    font-size: 13px;
    top: -10px;
  }
`;
export const StyledNewListing = styled.span`
  position: relative;
  padding: 6px;
  border-radius: 4px;
  background-color: #edeff1;
`;
export const StyledAddToCartButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #dcecfb;
  background: linear-gradient(to bottom, #6ba3db 5%, #416b94 100%);
  background-color: #6ba3db;
  border: 1px solid #6995c2;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #456d96;
  &:hover {
    background: linear-gradient(to bottom, #416b94 5%, #6ba3db 100%);
    background-color: #416b94;
  }
  &:active {
    position: relative;
    top: 1px;
  }
  margin-left: 37px;
  margin-bottom: 12px;
`;
export const StyledRemoveFromCartButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #cf866c;
  background: linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);
  background-color: #d0451b;
  border-radius: 3px;
  border: 1px solid #942911;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 13px;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #854629;
  &:hover {
    background: linear-gradient(to bottom, #bc3315 5%, #d0451b 100%);
    background-color: #bc3315;
  }
  &:active {
    position: relative;
    top: 1px;
  }
  margin-left: 37px;
  margin-bottom: 12px;
`;
