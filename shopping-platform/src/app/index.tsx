/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import * as Pages from './pages';
import { Header } from './components/Header';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - KoBay shopping"
        defaultTitle="KoBay shopping"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A KoBay shopping application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={Pages.HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
