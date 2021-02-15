/*
 *
 * TitlePage reducer
 *
 */
import produce from 'immer';
import { SUCCESS } from 'utils/constants';
import {
  MOVIE_CAST,
  MOVIE_DETAILS,
  MOVIE_PHOTOS,
  MOVIE_SIMILAR,
  MOVIE_REVIEWS,
  MOVIE_VIDEOS,
} from './actions';

export const initialState = {
  titleDetails: {},
  titlePhotos: {},
  titleVideos: {},
  titleCast: {},
  titleSimilar: {},
  titleReviews: {},
  relatedNews: {},
};

/* eslint-disable default-case, no-param-reassign */
const titlePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'default':
        break;

      case MOVIE_DETAILS[SUCCESS]:
        reduceFetchMovieDetails(action.response, draft);
        break;

      case MOVIE_PHOTOS[SUCCESS]:
        reduceFetchMoviePhotos(action.response, draft);
        break;

      case MOVIE_VIDEOS[SUCCESS]:
        reduceFetchMovieVideos(action.response, draft);
        break;

      case MOVIE_CAST[SUCCESS]:
        reduceFetchMovieCast(action.response, draft);
        break;

      case MOVIE_SIMILAR[SUCCESS]:
        reduceFetchMovieSimilar(action.response, draft);
        break;

      case MOVIE_REVIEWS[SUCCESS]:
        reduceFetchMovieReviews(action.response, draft);
        break;
    }
  });

export default titlePageReducer;

function reduceFetchMovieDetails(response, draft) {
  draft.titleDetails = {
    item: response,
  };
}

function reduceFetchMoviePhotos(response, draft) {
  draft.titlePhotos = {
    items: response.posters.filter((_, idx) => idx < 4),
  };
}

function reduceFetchMovieVideos(response, draft) {
  draft.titleVideos = {
    items: response.results.filter((_, idx) => idx < 2),
  };
}

function reduceFetchMovieCast(response, draft) {
  draft.titleCast = {
    items: response.cast.filter((_, idx) => idx < 8),
  };
}

function reduceFetchMovieSimilar(response, draft) {
  draft.titleSimilar = {
    items: response.results.filter((_, idx) => idx < 4),
  };
}

function reduceFetchMovieReviews(response, draft) {
  draft.titleReviews = {
    items: response.results.filter((_, idx) => idx < 1),
  };
}
