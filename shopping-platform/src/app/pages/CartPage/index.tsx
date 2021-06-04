import React from 'react';
import { Styled } from './StyledCart';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../../slice/selectors';
import { CartItem } from './CartItem';

export function Cart() {
  const cart = useSelector(selectCart);
  const history = useHistory();
  if (!cart) return null;
  console.log("CART: ", cart)
  return (
    <Styled>
      <header id="site-header">
        <div className="container">
          <h1>
            Shopping cart <span>[</span>
            {'  '}
            <em>
              <a
                href="https://codepen.io/tag/rodeo-007"
                target="_blank"
                onClick={e => {
                  e.preventDefault();
                  history.push('/');
                }}
              >
                Go To Home Page
              </a>
            </em>{' '}
            <span className="last-span is-open">]</span>
          </h1>
        </div>
      </header>
      <div className="container">
        <section id="cart">
          {cart.items.map((item, index) => {
            return <CartItem item={item} key={`${index}itemcart`} />;
          })}
        </section>
      </div>

      <footer id="site-footer">
        <div className="container clearfix">
          <div className="left">
            <h2 className="subtotal">
              Subtotal: <span>ILS {Math.floor(cart.total_price)}</span>
            </h2>
            <h3 className="tax">
              Taxes: <span>ILS {Math.floor(cart.total_price / 4)}</span>
            </h3>
            <h3 className="shipping">
              Shipping: <span>ILS {Math.floor(cart.total_price / 2.3512)}</span>
            </h3>
          </div>

          <div className="right">
            <h1 className="total">
              Total:{' '}
              <span>
                ILS{' '}
                {Math.floor(cart.total_price) +
                  Math.floor(cart.total_price / 4) +
                  Math.floor(cart.total_price / 2.3512)}
              </span>
            </h1>
            <a className="btn">Checkout</a>
          </div>
        </div>
      </footer>
    </Styled>
  );
}
