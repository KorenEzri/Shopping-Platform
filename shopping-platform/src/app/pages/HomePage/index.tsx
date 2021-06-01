import React, { useEffect, useState } from 'react';
import { network, routes } from '../../network';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  const [test, setTest] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const { data } = await network.get(routes.test.all);
        console.log(data[0])
        data ? setTest(`${data[0].lastName} ${data[0].firstName}`) : setTest('FAILED');
      } catch ({ message }) {
        console.log(message);
        setTest('FAILED');
      }
    })();
  });
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>{test}</span>
    </>
  );
}
