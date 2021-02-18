/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import initIcon from 'utils/initIcon';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import TitlePage from 'containers/TitlePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SearchPage from 'containers/SearchPage/Loadable';

import Header from 'components/Header';
import Footer from 'components/Footer';

import Wrapper from './Wrapper';

import GlobalStyle from '../../global-styles';

initIcon.init();

export default function App() {
  return (
    <Wrapper>
      <Helmet titleTemplate="%s - IMDb Clone" defaultTitle="IMDb Clone">
        <meta name="description" content="A IMDb Clone application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/title" component={TitlePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </Wrapper>
  );
}
