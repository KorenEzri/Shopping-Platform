import React from 'react';
import {
  StyledProductWrapper,
  StyledDescription,
  StyledProductBorder,
  StyledBuyNowButton,
  StyledPriceTag,
  StyledNewListing,
} from '../ShoppingGrid/StyledShoppingGrid';
const newListingRegxp = new RegExp('NEW LISTING');
export function CarouselItem({ description, image, price }) {
  return (
    <StyledProductWrapper>
      <li>
        <StyledProductBorder>
          <StyledDescription>
            {description.match(newListingRegxp) ? (
              <p>{description.split(newListingRegxp)}</p>
            ) : (
              <p>
                <StyledNewListing>NEW LISTING</StyledNewListing>
                <br/>
                {description}
              </p>
            )}
          </StyledDescription>
          <img src={image} alt={description} />
          <StyledPriceTag>
            <p>{price}</p>
            <span>Or best offer</span>
            <br />
            <span>
              +ILS {price.split(' ')[1] / 2} shipping estimate from United
              States
            </span>
          </StyledPriceTag>
          <StyledBuyNowButton>Buy It Now</StyledBuyNowButton>
        </StyledProductBorder>
      </li>
    </StyledProductWrapper>
  );
}
