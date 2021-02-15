/**
 *
 * TitlePage
 *
 */

import Box from 'components/Box';
import MoviesList from 'components/MoviesList';
import PageGroup from 'components/PageGroup';
import PageSection from 'components/PageSection';
import RelatedNews from 'components/RelatedNews';
import TitleCast from 'components/TitleCast';
import TitleDetails from 'components/TitleDetails';
import TitleHero from 'components/TitleHero';
import TitleMetaData from 'components/TitleMetaData';
import TitlePhotos from 'components/TitlePhotos';
import TitleReviews from 'components/TitleReviews';
import TitleSimilar from 'components/TitleSimilar';
import TitleStoryline from 'components/TitleStoryline';
import TitleVideos from 'components/TitleVideos';
import * as appActions from 'containers/App/actions';
import * as appSelectors from 'containers/App/selectors';
import PropTypes from 'prop-types';
import React, { memo, useEffect } from 'react';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { getYearAtReleaseDate } from 'services/date';
import * as titleActions from './actions';
import reducer from './reducer';
import saga from './saga';
import * as titleSelectors from './selectors';

export function TitlePage({
  titleDetails,
  titlePhotos,
  titleVideos,
  titleCast,
  titleSimilar,
  titleReviews,
  recentlyViewed,
  onLoadTitleDetails,
  onLoadTitlePhotos,
  onLoadTitleVideos,
  onLoadTitleCast,
  onLoadTitleSimilar,
  onLoadTitleReviews,
  onLoadRecentlyViewed,
}) {
  useInjectReducer({ key: 'titlePage', reducer });
  useInjectSaga({ key: 'titlePage', saga });

  useEffect(() => {
    onLoadRecentlyViewed();
    onLoadTitleDetails();
    onLoadTitlePhotos();
    onLoadTitleVideos();
    onLoadTitleCast();
    onLoadTitleSimilar();
    onLoadTitleReviews();
  }, []);

  if (!titleDetails) return null;

  const titleYear = getYearAtReleaseDate(titleDetails.release_date);

  return (
    <div>
      <Helmet>
        <title>
          {titleDetails.title} ({titleYear})
        </title>
        <meta name="description" content="Description of TitlePage" />
      </Helmet>
      <Container>
        <div>
          <TitleMetaData titleDetails={titleDetails} />
          <TitleHero titleDetails={titleDetails} />
          <Row>
            <Col sm={8}>
              <p>
                <Button
                  variant="outline-light"
                  size="sm"
                  style={{
                    borderRadius: 20,
                    marginRight: '0.5rem',
                    borderWidth: 2,
                  }}
                >
                  Drama
                </Button>
                <Button
                  variant="outline-light"
                  size="sm"
                  style={{
                    borderRadius: 20,
                    marginRight: '0.5rem',
                    borderWidth: 2,
                  }}
                >
                  Fantasy
                </Button>
                <Button
                  variant="outline-light"
                  size="sm"
                  style={{
                    borderRadius: 20,
                    marginRight: '0.5rem',
                    borderWidth: 2,
                  }}
                >
                  Music
                </Button>
              </p>
              <p>{titleDetails.overview}</p>
              <ListGroup variant="flush">
                <ListGroup.Item variant="dark">Director</ListGroup.Item>
                <ListGroup.Item variant="dark">Writers</ListGroup.Item>
                <ListGroup.Item variant="dark">Stars</ListGroup.Item>
                <ListGroup.Item variant="dark">IMDbPro</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={4}>
              <Box />
            </Col>
          </Row>
          <Row>
            <Col>
              <PageGroup>
                <PageSection hidden title="Videos" seeAllLink="/">
                  <TitleVideos titleVideos={titleVideos} />
                </PageSection>
                <PageSection hidden title="Photos" seeAllLink="/">
                  <TitlePhotos titlePhotos={titlePhotos} />
                </PageSection>
                <PageSection
                  title="Cast"
                  subtitle="Cast overview, first billed only"
                  seeAllLink="/"
                  hidden
                >
                  <TitleCast titleCast={titleCast} />
                </PageSection>
                <PageSection hidden title="More like this" seeAllLink="/">
                  <TitleSimilar titleSimilar={titleSimilar} />
                </PageSection>
                <PageSection hidden title="Storyline" seeAllLink="/">
                  <TitleStoryline titleDetails={titleDetails} />
                </PageSection>
                <PageSection title="Did you know" seeAllLink="/">
                  <Box />
                </PageSection>
                <PageSection hidden title="User reviews" seeAllLink="/">
                  <TitleReviews titleReviews={titleReviews} />
                </PageSection>
                <PageSection title="FQA" seeAllLink="/">
                  <Box />
                </PageSection>
                <PageSection hidden title="Details" seeAllLink="/">
                  <TitleDetails titleDetails={titleDetails} />
                </PageSection>
                <PageSection title="Box office" seeAllLink="/">
                  <Box />
                </PageSection>
                <PageSection title="Technical Specs" seeAllLink="/">
                  <Box />
                </PageSection>
                <PageSection hidden title="Related news" seeAllLink="/">
                  <RelatedNews />
                </PageSection>
              </PageGroup>
            </Col>
            <Col sm={4}>
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
            </Col>
          </Row>
        </div>
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
      </Container>
    </div>
  );
}

TitlePage.propTypes = {
  titleDetails: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  titlePhotos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  titleVideos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  titleCast: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  titleSimilar: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  titleReviews: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  recentlyViewed: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoadTitleDetails: PropTypes.func,
  onLoadTitlePhotos: PropTypes.func,
  onLoadTitleVideos: PropTypes.func,
  onLoadTitleCast: PropTypes.func,
  onLoadTitleSimilar: PropTypes.func,
  onLoadTitleReviews: PropTypes.func,
  onLoadRecentlyViewed: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  titleDetails: titleSelectors.makeSelectMovieDetails(),
  titlePhotos: titleSelectors.makeSelectMoviePhotos(),
  titleVideos: titleSelectors.makeSelectMovieVideos(),
  titleCast: titleSelectors.makeSelectMovieCast(),
  titleSimilar: titleSelectors.makeSelectMovieSimilar(),
  titleReviews: titleSelectors.makeSelectMovieReviews(),
  recentlyViewed: appSelectors.makeSelectRecentlyViewed(),
});

function mapDispatchToProps(dispatch) {
  const onLoadTitleDetails = titleActions.movieDetails.request;
  const onLoadTitlePhotos = titleActions.moviePhotos.request;
  const onLoadTitleVideos = titleActions.movieVideos.request;
  const onLoadTitleCast = titleActions.movieCast.request;
  const onLoadTitleSimilar = titleActions.movieSimilar.request;
  const onLoadTitleReviews = titleActions.movieReviews.request;
  const onLoadRecentlyViewed = appActions.recentlyViewed.request;

  return bindActionCreators(
    {
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
