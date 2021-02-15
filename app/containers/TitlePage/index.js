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
import { getYearAtReleaseDate } from 'services/date';
import { getSearchParam } from 'services/url';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import * as titleActions from './actions';
import reducer from './reducer';
import saga from './saga';
import * as titleSelectors from './selectors';

export function TitlePage({
  titleId,
  titleDetails,
  titlePhotos,
  titleVideos,
  titleCast,
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
    if (titleId) fetchTitleContent();

    const newTitleId = getTitleId();
    onChangeTitleId(+newTitleId);
    fetchTitleContent();
  }, []);

  if (!titleDetails) return null;

  const titleYear = getYearAtReleaseDate(titleDetails.release_date);
  const videoCount = titleVideos ? titleVideos.length : 0;
  const photoCount = titlePhotos ? titlePhotos.length : 0;

  return (
    <div>
      <Helmet>
        <title>
          {titleDetails.title} ({titleYear})
        </title>
        <meta name="description" content={titleDetails.overview} />
      </Helmet>
      <Container>
        <div>
          <TitleMetaData titleDetails={titleDetails} />
          <TitleHero
            titleDetails={titleDetails}
            videoCount={videoCount}
            photoCount={photoCount}
          />
          <Row>
            <Col sm={8}>
              <p>
                {titleDetails.genres.map(item => (
                  <Button
                    key={`genre-${item.id}`}
                    variant="outline-light"
                    size="sm"
                    style={{
                      borderRadius: 20,
                      marginRight: '0.5rem',
                      borderWidth: 2,
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
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
                  <TitleSimilar titleSimilar={titleSimilar} />
                </PageSection>
                <PageSection title="Storyline" seeAllLink="/">
                  <TitleStoryline titleDetails={titleDetails} />
                </PageSection>
                <PageSection title="Did you know" seeAllLink="/">
                  <Box />
                </PageSection>
                <PageSection title="User reviews" seeAllLink="/">
                  <TitleReviews titleReviews={titleReviews} />
                </PageSection>
                <PageSection title="FQA" seeAllLink="/">
                  <Box />
                </PageSection>
                <PageSection title="Details" seeAllLink="/">
                  <TitleDetails titleDetails={titleDetails} />
                </PageSection>
                <PageSection title="Box office" seeAllLink="/">
                  <Box />
                </PageSection>
                <PageSection title="Technical Specs" seeAllLink="/">
                  <Box />
                </PageSection>
                <PageSection title="Related news" seeAllLink="/">
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
  titleId: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  titleDetails: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  titlePhotos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  titleVideos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  titleCast: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
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
  titleId: titleSelectors.makeSelectMovieId(),
  titleDetails: titleSelectors.makeSelectMovieDetails(),
  titlePhotos: titleSelectors.makeSelectMoviePhotos(),
  titleVideos: titleSelectors.makeSelectMovieVideos(),
  titleCast: titleSelectors.makeSelectMovieCast(),
  titleSimilar: titleSelectors.makeSelectMovieSimilar(),
  titleReviews: titleSelectors.makeSelectMovieReviews(),
  recentlyViewed: appSelectors.makeSelectRecentlyViewed(),
  location: appSelectors.makeSelectLocation(),
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
