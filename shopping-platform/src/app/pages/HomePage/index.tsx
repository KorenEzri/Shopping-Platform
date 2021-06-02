import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShoppingGrid } from './components/ShoppingGrid';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="KoBay homepage" />
      </Helmet>
      <ShoppingGrid />
    </>
  );
}
