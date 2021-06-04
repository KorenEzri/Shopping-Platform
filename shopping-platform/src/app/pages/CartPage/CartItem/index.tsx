import React, {useState} from 'react';

export function CartItem({ item }) {
    const [itemQt, setItemQt] = useState(1)
    console.log(item)
  return (
    <div>
      <article className="product">
        <header>
          <a className="remove">
            <img src={item.image} alt="" />

            <h3>Remove product</h3>
          </a>
        </header>
        <div className="content">
          <h1>{item.description}</h1>
        </div>
        <footer className="content">
          <span className="qt-minus">-</span>
          <span className="qt">1</span>
          <span className="qt-plus">+</span>

          <h2 className="full-price">ILS {item.price}</h2>

          <h2 className="price">34.99</h2>
        </footer>
      </article>
    </div>
  );
}
