/**
 *
 * TitlePage
 *
 */

import MoviesList from 'components/MoviesList';
import PageGroup from 'components/PageGroup';
import PageSection from 'components/PageSection';
import PropTypes from 'prop-types';
import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Col, Container, Row, Button, ListGroup } from 'react-bootstrap';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import * as appSelectors from 'containers/App/selectors';
import * as appActions from 'containers/App/actions';

import Box from 'components/Box';

import reducer from './reducer';
import saga from './saga';

export function TitlePage({ recentlyViewed, onLoadRecentlyViewed }) {
  useInjectReducer({ key: 'titlePage', reducer });
  useInjectSaga({ key: 'titlePage', saga });

  useEffect(() => {
    onLoadRecentlyViewed();
  }, []);

  return (
    <div>
      <Helmet>
        <title>If I Stay 2014</title>
        <meta name="description" content="Description of TitlePage" />
      </Helmet>
      <Container>
        <div>
          <div className="py-4">
            <Row>
              <Col sm={8}>
                <h1>If I Stay (2014)</h1>
                <p>2014 . PG-13 . 1h24m</p>
              </Col>
              <Col sm={4}>
                <Box />
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col sm={3}>
                <Box />
              </Col>
              <Col sm={6}>
                <Box />
              </Col>
              <Col sm={3}>
                <Box />
                <Box />
              </Col>
            </Row>
          </div>
          <div>
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
                <p>
                  Life changes in an instant for young Mia Hall after a car
                  accident puts her in a coma. During an out-of-body experience,
                  she must decide whether to wake up and live a life far
                  different than she had imagined. The choice is hers if she can
                  go on.
                </p>
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
          </div>
          <div>
            <Row>
              <Col sm={8}>
                <PageGroup>
                  <PageSection title="Videos" seeAllLink="/">
                    <Row>
                      <Col sm={6}>
                        <Box />
                      </Col>
                      <Col sm={6}>
                        <Box />
                      </Col>
                    </Row>
                  </PageSection>
                  <PageSection title="Photos" seeAllLink="/">
                    <Row>
                      <Col sm={3}>
                        <Box />
                      </Col>
                      <Col sm={3}>
                        <Box />
                      </Col>
                      <Col sm={3}>
                        <Box />
                      </Col>
                      <Col sm={3}>
                        <Box />
                      </Col>
                    </Row>
                  </PageSection>
                  <PageSection
                    title="Casts"
                    subtitle="Cast overview, first billed only"
                    seeAllLink="/"
                  >
                    <Row>
                      <Col sm={6} className="mb-4">
                        <Box />
                      </Col>
                      <Col sm={6} className="mb-4">
                        <Box />
                      </Col>
                      <Col sm={6} className="mb-4">
                        <Box />
                      </Col>
                      <Col sm={6} className="mb-4">
                        <Box />
                      </Col>
                      <Col sm={6} className="mb-4">
                        <Box />
                      </Col>
                      <Col sm={6} className="mb-4">
                        <Box />
                      </Col>
                      <Col sm={6} className="mb-4">
                        <Box />
                      </Col>
                      <Col sm={6} className="mb-4">
                        <Box />
                      </Col>
                      <Col sm={6} className="mb-4">
                        <Box />
                      </Col>
                      <Col sm={6} className="mb-4">
                        <Box />
                      </Col>
                      <Col sm={6} className="mb-4">
                        <Box />
                      </Col>
                      <Col sm={6} className="mb-4">
                        <Box />
                      </Col>
                    </Row>
                  </PageSection>
                  <PageSection title="More like this" seeAllLink="/">
                    <Row>
                      <Col sm={3}>
                        <Box />
                      </Col>
                      <Col sm={3}>
                        <Box />
                      </Col>
                      <Col sm={3}>
                        <Box />
                      </Col>
                      <Col sm={3}>
                        <Box />
                      </Col>
                    </Row>
                  </PageSection>
                  <PageSection title="Storyline" seeAllLink="/">
                    <Box />
                  </PageSection>
                  <PageSection title="Did you know" seeAllLink="/">
                    <Box />
                  </PageSection>
                  <PageSection title="User reviews" seeAllLink="/">
                    <Box />
                  </PageSection>
                  <PageSection title="FQA" seeAllLink="/">
                    <Box />
                  </PageSection>
                  <PageSection title="Details" seeAllLink="/">
                    <ListGroup variant="flush">
                      <ListGroup.Item variant="dark">
                        Release date
                      </ListGroup.Item>
                      <ListGroup.Item variant="dark">
                        Country of origin
                      </ListGroup.Item>
                      <ListGroup.Item variant="dark">
                        Offical sites
                      </ListGroup.Item>
                      <ListGroup.Item variant="dark">Languague</ListGroup.Item>
                      <ListGroup.Item variant="dark">
                        Also known as
                      </ListGroup.Item>
                      <ListGroup.Item variant="dark">
                        Filming locations
                      </ListGroup.Item>
                      <ListGroup.Item variant="dark">
                        Production companies
                      </ListGroup.Item>
                      <ListGroup.Item variant="dark">
                        See more company credits at IMDbPro
                      </ListGroup.Item>
                    </ListGroup>
                  </PageSection>
                  <PageSection title="Box office" seeAllLink="/">
                    <Box />
                  </PageSection>
                  <PageSection title="Technical Specs" seeAllLink="/">
                    <Box />
                  </PageSection>
                  <PageSection title="Related news" seeAllLink="/">
                    <Row>
                      <Col sm={6}>
                        <Box />
                      </Col>
                      <Col sm={6}>
                        <Box />
                      </Col>
                    </Row>
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
  recentlyViewed: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoadRecentlyViewed: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  recentlyViewed: appSelectors.makeSelectRecentlyViewed(),
});

function mapDispatchToProps(dispatch) {
  const onLoadRecentlyViewed = appActions.recentlyViewed.request;

  return bindActionCreators(
    {
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
