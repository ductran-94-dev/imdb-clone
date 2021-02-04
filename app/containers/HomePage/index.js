/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';

import Box from 'components/Box';
import PageGroup from 'components/PageGroup';
import PageSection from 'components/PageSection';

export function HomePage() {
  return (
    <article>
      <Helmet>
        <title>
          IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows
        </title>
        <meta
          name="description"
          content="IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows"
        />
      </Helmet>
      <div>
        <PageGroup title="Featured today">
          <Box />
        </PageGroup>
        <PageGroup title="What to watch">
          <PageSection title="Top picks">
            <Box />
          </PageSection>
          <PageSection title="From your Watchlist">
            <Box />
          </PageSection>
          <PageSection title="Fan favourites">
            <Box />
          </PageSection>
          <PageSection title="More to watch">
            <Box />
          </PageSection>
        </PageGroup>
        <PageGroup title="Exclusive videos">
          <PageSection title="IMDb Originals">
            <Box />
          </PageSection>
        </PageGroup>
        <PageGroup title="Explore what’s streaming">
          <PageSection title="">
            <Box />
          </PageSection>
          <PageSection title="No name">
            <Box />
          </PageSection>
        </PageGroup>
        <PageGroup title="More to explore">
          <PageSection title="Editors’ picks" moreLink="/editors_picks">
            <Box />
          </PageSection>
          <PageSection title="Born today">
            <Box />
          </PageSection>
          <PageSection title="Top news">
            <Box />
          </PageSection>
          <PageSection title="Recently viewed">
            <Box />
          </PageSection>
        </PageGroup>
      </div>
    </article>
  );
}

HomePage.propTypes = {};

export default HomePage;
