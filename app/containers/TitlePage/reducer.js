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
  CHANGE_TITLE_ID,
} from './actions';

export const initialState = {
  titleId: false,
  titleDetails: {},
  titlePhotos: {},
  titleVideos: {},
  titleCast: {},
  titleCrew: {},
  titleSimilar: {},
  titleReviews: {},
  relatedNews: {},
};

/* eslint-disable default-case, no-param-reassign */
const titlePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_TITLE_ID:
        draft.titleId = action.titleId;
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
  const castItems = response.cast.filter((_, idx) => idx < 8);
  const crewItems = response.crew.filter((_, idx) => idx < 8);

  draft.titleCast = {
    items: castItems,
  };
  draft.titleCrew = {
    items: crewItems,
  };
}

function reduceFetchMovieSimilar(response, draft) {
  draft.titleSimilar = {
    items: response.results.filter((_, idx) => idx < 4),
  };
}

function reduceFetchMovieReviews(response, draft) {
  draft.titleReviews = {
    items: response.results.filter((_, idx) => idx < 2),
  };
}
