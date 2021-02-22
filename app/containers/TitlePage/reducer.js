/*
 *
 * TitlePage reducer
 *
 */
import produce from 'immer';
import { SUCCESS, REQUEST, FAILURE } from 'utils/constants';
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
  titleDetails: {
    loading: false,
    error: false,
    item: false,
  },
  titlePhotos: {
    loading: false,
    error: false,
    items: false,
  },
  titleVideos: {
    loading: false,
    error: false,
    items: false,
  },
  titleCast: {
    loading: false,
    error: false,
    items: false,
  },
  titleCrew: {
    loading: false,
    error: false,
    items: false,
  },
  titleSimilar: {
    loading: false,
    error: false,
    items: false,
  },
  titleReviews: {
    loading: false,
    error: false,
    items: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const titlePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_TITLE_ID:
        draft.titleId = action.titleId;
        break;

      case MOVIE_DETAILS[REQUEST]:
        draft.titleDetails.loading = true;
        break;

      case MOVIE_DETAILS[SUCCESS]:
        draft.titleDetails.loading = false;
        reduceFetchMovieDetails(action.response, draft);
        break;

      case MOVIE_DETAILS[FAILURE]:
        draft.titleDetails.loading = false;
        draft.titleDetails.error = action.response;
        break;

      case MOVIE_PHOTOS[REQUEST]:
        draft.titlePhotos.loading = true;
        break;

      case MOVIE_PHOTOS[SUCCESS]:
        draft.titlePhotos.loading = false;
        reduceFetchMoviePhotos(action.response, draft);
        break;

      case MOVIE_PHOTOS[FAILURE]:
        draft.titlePhotos.loading = false;
        draft.titlePhotos.error = action.response;
        break;

      case MOVIE_VIDEOS[REQUEST]:
        draft.titleVideos.loading = true;
        break;

      case MOVIE_VIDEOS[SUCCESS]:
        draft.titleVideos.loading = false;
        reduceFetchMovieVideos(action.response, draft);
        break;

      case MOVIE_VIDEOS[FAILURE]:
        draft.titleVideos.loading = false;
        draft.titleVideos.error = action.response;
        break;

      case MOVIE_CAST[REQUEST]:
        draft.titleCast.loading = true;
        draft.titleCrew.loading = true;
        break;

      case MOVIE_CAST[SUCCESS]:
        draft.titleCast.loading = false;
        draft.titleCrew.loading = false;
        reduceFetchMovieCast(action.response, draft);
        break;

      case MOVIE_CAST[FAILURE]:
        draft.titleCast.loading = false;
        draft.titleCast.loading = false;
        draft.titleCrew.error = action.response;
        draft.titleCrew.error = action.response;
        break;

      case MOVIE_SIMILAR[REQUEST]:
        draft.titleSimilar.loading = true;
        break;

      case MOVIE_SIMILAR[SUCCESS]:
        draft.titleSimilar.loading = false;
        reduceFetchMovieSimilar(action.response, draft);
        break;

      case MOVIE_SIMILAR[FAILURE]:
        draft.titleSimilar.loading = false;
        draft.titleSimilar.error = action.response;
        break;

      case MOVIE_REVIEWS[REQUEST]:
        draft.titleReviews.loading = true;
        break;

      case MOVIE_REVIEWS[SUCCESS]:
        draft.titleReviews.loading = false;
        reduceFetchMovieReviews(action.response, draft);
        break;

      case MOVIE_REVIEWS[FAILURE]:
        draft.titleReviews.loading = false;
        draft.titleReviews.error = action.response;
        break;
    }
  });

export default titlePageReducer;

function reduceFetchMovieDetails(response, draft) {
  draft.titleDetails.item = response;
}

function reduceFetchMoviePhotos(response, draft) {
  draft.titlePhotos.items = response.posters.filter((_, idx) => idx < 4);
}

function reduceFetchMovieVideos(response, draft) {
  draft.titleVideos.items = response.results.filter((_, idx) => idx < 2);
}

function reduceFetchMovieCast(response, draft) {
  const castItems = response.cast.filter((_, idx) => idx < 8);
  const crewItems = response.crew.filter((_, idx) => idx < 8);

  draft.titleCast.items = castItems;
  draft.titleCrew.items = crewItems;
}

function reduceFetchMovieSimilar(response, draft) {
  draft.titleSimilar.items = response.results.filter((_, idx) => idx < 4);
}

function reduceFetchMovieReviews(response, draft) {
  draft.titleReviews.items = response.results.filter((_, idx) => idx < 2);
}
