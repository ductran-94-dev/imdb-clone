/**
 *
 * TitleFact
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import AddToWatchlist from 'containers/AddToWatchlist';

import Wrapper from './Wrapper';
import ListGroup from './ListGroup';
import ListGroupItem from './ListGroupItem';
import InlineList from './InlineList';
import InlineListItem from './InlineListItem';
import Button from './Button';

function TitleFact({ titleDetails }) {
  const fact = [
    {
      title: 'Director',
      content: ['Josh Boone'],
    },
    {
      title: 'Writers',
      content: ['Scott Neustadter', 'Michael H. Weber', 'John Green'],
    },
    {
      title: 'Stars',
      content: ['Shailene Woodley', 'Ansel Elgort', 'Nat Wolff'],
    },
  ];

  return (
    <Wrapper>
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
          <ListGroup variant="flush">
            <ListGroupItem>{titleDetails.overview}</ListGroupItem>
            {fact.map(item => (
              <ListGroupItem key={item.title}>
                <strong>{item.title}</strong>
                <InlineList>
                  {item.content.map(contentItem => (
                    <InlineListItem key={contentItem}>
                      <a href="/">{contentItem}</a>
                    </InlineListItem>
                  ))}
                </InlineList>
              </ListGroupItem>
            ))}
            <ListGroupItem>
              <strong>
                IMDb<span className="text-info">Pro</span>
              </strong>
              <InlineList>
                <InlineListItem>
                  <a href="/">See production, box office & company info</a>
                </InlineListItem>
              </InlineList>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col sm={4}>
          <AddToWatchlist
            component={Button}
            size="lg"
            block
            id={titleDetails.id}
          >
            + Add To Watch
          </AddToWatchlist>
        </Col>
      </Row>
    </Wrapper>
  );
}

TitleFact.propTypes = {
  titleDetails: PropTypes.object,
};

export default TitleFact;
