import React from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../../slice/selectors';
import { Styled, StyledProceedButton, StyledCartButton } from './StyledAddedToCart';

export function AddedToCart() {
  const cart = useSelector(selectCart);
  return (
    <Styled>
      <div id="wrap">
        <div>
          <div>
            <div className="container-fluid">
              <div className="cart-notify panel panel-default">
                <div className="panel-body clearfix">
                  <div className="cart-item pull-left">
                    <h4 className="text-success">
                      <i className="fa fa-lg fa-check"></i>
                      Added to Cart
                    </h4>
                  </div>
                  <div className="cart-details pull-left">
                    <h4>
                      <strong>Cart Subtotal</strong> ({cart.items.length} items)
                      <span className="text-danger">ILS {cart.total_price}</span>
                    </h4>
                  </div>
                  <div className="cart-buttons pull-right">
                    <StyledCartButton className="btn btn-default">
                      Cart
                    </StyledCartButton>
                    <StyledProceedButton className="btn btn-success">
                      Proceed to Checkout ({cart.items.length} items)
                    </StyledProceedButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
}
