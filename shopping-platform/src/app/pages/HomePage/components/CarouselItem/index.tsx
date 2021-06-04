import React, { useState } from 'react';
import {
  StyledProductWrapper,
  StyledDescription,
  StyledProductBorder,
  StyledBuyNowButton,
  StyledPriceTag,
  StyledNewListing,
  StyledAddToCartButton,
} from '../ShoppingGrid/StyledShoppingGrid';
import { useDispatch } from 'react-redux';
import { useCartSlice } from '../../../../slice';
import { AddedToCart } from '../../../../components';

const newListingRegxp = new RegExp('NEW LISTING');

const handleBuyNow = () => {};

export function CarouselItem({ description, image, price }) {
  const [showAddedMsg, setShowAddedMsg] = useState(false);
  const { actions } = useCartSlice();
  const dispatch = useDispatch();
  const item = {
    description,
    image,
    price: price?.split(' ')[1],
  };

  const handleAddToCart = () => {
    dispatch(actions.addToCart({ item }));
    setShowAddedMsg(true);
    setTimeout(() => {
      setShowAddedMsg(false);
    }, 3500);
  };

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
                <br />
                {description}
              </p>
            )}
          </StyledDescription>
          {image ? (
            <img src={image} alt={description} />
          ) : (
            <img
              src="https://cdn.vox-cdn.com/thumbor/JS-FN8mS5ioqtWMcwlHKJ5tiL3w=/0x0:1268x845/1400x1050/filters:focal(0x0:1268x845):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/35813328/Screenshot_2014-07-19_15.24.57.0.png"
              alt={description}
            />
          )}

          {showAddedMsg ? (
            <AddedToCart />
          )  : (
            <>
              <StyledPriceTag>
                <p>{price}</p>
                <span>Or best offer</span>
                <br />
                <span>
                  +ILS {price?.split(' ')[1] / 2} shipping estimate from United
                  States
                </span>
              </StyledPriceTag>
              <StyledBuyNowButton>Buy It Now</StyledBuyNowButton>
              <StyledAddToCartButton onClick={handleAddToCart}>
                Add to cart
              </StyledAddToCartButton>
            </>
          )}
        </StyledProductBorder>
      </li>
    </StyledProductWrapper>
  );
}
