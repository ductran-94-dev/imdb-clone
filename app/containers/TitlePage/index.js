/**
 *
 * TitlePage
 *
 */

import PropTypes from 'prop-types';
import React, { memo, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';
import { bindActionCreators, compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { getYearAtReleaseDate } from 'services/date';
import { getSearchParam } from 'services/url';

import Box from 'components/Box';
import MoviesList from 'components/MoviesList';
import PageGroup from 'components/PageGroup';
import PageSection from 'components/PageSection';

import * as appActions from 'containers/App/actions';
import * as selectors from './selectors';
import * as titleActions from './actions';
import reducer from './reducer';
import saga from './saga';

import TitleCast from './TitleCast';
import TitleFact from './TitleFact';
import TitleHero from './TitleHero';
import TitleMetaData from './TitleMetaData';
import TitlePhotos from './TitlePhotos';
import TitleReviews from './TitleReviews';
import TitleSimilar from './TitleSimilar';
import TitleVideos from './TitleVideos';
import Wrapper from './Wrapper';

export function TitlePage({
  titleId,
  titleDetails,
  titlePhotos,
  titleVideos,
  titleCast,
  titleCrew,
  titleSimilar,
  titleReviews,
  recentlyViewed,
  location,
  onLoadTitleDetails,
  onLoadTitlePhotos,
  onLoadTitleVideos,
  onLoadTitleCast,
  onLoadTitleSimilar,
  onLoadTitleReviews,
  onLoadRecentlyViewed,
  onChangeTitleId,
}) {
  useInjectReducer({ key: 'titlePage', reducer });
  useInjectSaga({ key: 'titlePage', saga });

  const fetchTitleContent = () => {
    onLoadTitleDetails();
    onLoadTitlePhotos();
    onLoadTitleVideos();
    onLoadTitleCast();
    onLoadTitleSimilar();
    onLoadTitleReviews();
    onLoadRecentlyViewed();
  };

  const getTitleId = () => getSearchParam(location, 'id');

  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
      delay: 500,
    });

    if (titleId) fetchTitleContent();

    const newTitleId = getTitleId();
    onChangeTitleId(+newTitleId);
    fetchTitleContent();
  }, [location]);

  if (!titleDetails) return null;

  const titleYear = getYearAtReleaseDate(titleDetails.release_date);

  return (
    <div>
      <Helmet>
        <title>
          {titleDetails.title} ({titleYear})
        </title>
        <meta name="description" content={titleDetails.overview} />
      </Helmet>
      <Container>
        <Wrapper>
          <PageGroup>
            {1 === 0 && (
              <PageSection>
                <TitleMetaData titleDetails={titleDetails} />
              </PageSection>
            )}
            {1 === 0 && (
              <PageSection>
                <TitleHero titleDetails={titleDetails} />
              </PageSection>
            )}
            <PageSection>
              <TitleFact
                titleDetails={titleDetails}
                titleCast={titleCast}
                titleCrew={titleCrew}
              />
            </PageSection>
          </PageGroup>
          <PageGroup>
            <PageSection title="Videos" seeAllLink="/">
              <TitleVideos titleVideos={titleVideos} />
            </PageSection>
            <PageSection title="Photos" seeAllLink="/">
              <TitlePhotos titlePhotos={titlePhotos} />
            </PageSection>
            <PageSection
              title="Cast"
              subtitle="Cast overview, first billed only"
              seeAllLink="/"
            >
              <TitleCast titleCast={titleCast} />
            </PageSection>
            <PageSection title="More like this" seeAllLink="/">
              <TitleSimilar
                loading={false}
                error={false}
                titleSimilar={titleSimilar}
              />
            </PageSection>
            <PageSection title="User reviews" seeAllLink="/">
              <TitleReviews
                loading={false}
                error={false}
                titleReviews={titleReviews}
              />
            </PageSection>
          </PageGroup>
          <PageGroup title="More to explore">
            <PageSection title="">
              <Box />
            </PageSection>
            <PageSection
              title="User lists"
              subtitle="Related lists from IMDb users"
              seeAllLink="/"
            >
              <Box />
            </PageSection>
            <PageSection
              title="User polls"
              subtitle="Related poll from IMDb users"
              seeAllLink="/"
            >
              <Box />
            </PageSection>
          </PageGroup>
          <PageGroup title="">
            <PageSection title="Recently viewed">
              <MoviesList
                {...{
                  loading: false,
                  error: false,
                  movies: recentlyViewed,
                }}
              />
            </PageSection>
          </PageGroup>
        </Wrapper>
      </Container>
    </div>
  );
}

TitlePage.propTypes = {
  titleId: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  titleDetails: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  titlePhotos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  titleVideos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  titleCast: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  titleCrew: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  titleSimilar: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  titleReviews: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  recentlyViewed: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  location: PropTypes.any,
  onChangeTitleId: PropTypes.func,
  onLoadTitleDetails: PropTypes.func,
  onLoadTitlePhotos: PropTypes.func,
  onLoadTitleVideos: PropTypes.func,
  onLoadTitleCast: PropTypes.func,
  onLoadTitleSimilar: PropTypes.func,
  onLoadTitleReviews: PropTypes.func,
  onLoadRecentlyViewed: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  titleId: selectors.makeSelectMovieId(),
  titleDetails: selectors.makeSelectMovieDetails(),
  titlePhotos: selectors.makeSelectMoviePhotos(),
  titleVideos: selectors.makeSelectMovieVideos(),
  titleCast: selectors.makeSelectMovieCast(),
  titleCrew: selectors.makeSelectMovieCrew(),
  titleSimilar: selectors.makeSelectMovieSimilar(),
  titleReviews: selectors.makeSelectMovieReviews(),
  recentlyViewed: selectors.makeSelectRecentlyViewed(),
  location: selectors.makeSelectLocation(),
});

function mapDispatchToProps(dispatch) {
  const onChangeTitleId = titleActions.changeTitleId;
  const onLoadTitleDetails = titleActions.movieDetails.request;
  const onLoadTitlePhotos = titleActions.moviePhotos.request;
  const onLoadTitleVideos = titleActions.movieVideos.request;
  const onLoadTitleCast = titleActions.movieCast.request;
  const onLoadTitleSimilar = titleActions.movieSimilar.request;
  const onLoadTitleReviews = titleActions.movieReviews.request;
  const onLoadRecentlyViewed = appActions.recentlyViewed.request;

  return bindActionCreators(
    {
      onChangeTitleId,
      onLoadTitleDetails,
      onLoadTitlePhotos,
      onLoadTitleVideos,
      onLoadTitleCast,
      onLoadTitleSimilar,
      onLoadTitleReviews,
      onLoadRecentlyViewed,
    },
    dispatch,
  );
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TitlePage);
