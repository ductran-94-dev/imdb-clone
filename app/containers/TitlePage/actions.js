/*
 *
 * TitlePage actions
 *
 */
import { createAction, createRequestTypes } from 'utils/actionCreator';
import { FAILURE, REQUEST, SUCCESS } from 'utils/constants';

export const CHANGE_TITLE_ID = 'CHANGE_TITLE_ID';
export const changeTitleId = titleId =>
  createAction(CHANGE_TITLE_ID, { titleId });

export const MOVIE_DETAILS = createRequestTypes('MOVIE_DETAILS');
export const movieDetails = {
  request: () => createAction(MOVIE_DETAILS[REQUEST]),
  success: response => createAction(MOVIE_DETAILS[SUCCESS], { response }),
  failure: response => createAction(MOVIE_DETAILS[FAILURE], { response }),
};

export const MOVIE_PHOTOS = createRequestTypes('MOVIE_PHOTOS');
export const moviePhotos = {
  request: () => createAction(MOVIE_PHOTOS[REQUEST]),
  success: response => createAction(MOVIE_PHOTOS[SUCCESS], { response }),
  failure: response => createAction(MOVIE_PHOTOS[FAILURE], { response }),
};

export const MOVIE_VIDEOS = createRequestTypes('MOVIE_VIDEOS');
export const movieVideos = {
  request: () => createAction(MOVIE_VIDEOS[REQUEST]),
  success: response => createAction(MOVIE_VIDEOS[SUCCESS], { response }),
  failure: response => createAction(MOVIE_VIDEOS[FAILURE], { response }),
};

export const MOVIE_CAST = createRequestTypes('MOVIE_CAST');
export const movieCast = {
  request: () => createAction(MOVIE_CAST[REQUEST]),
  success: response => createAction(MOVIE_CAST[SUCCESS], { response }),
  failure: response => createAction(MOVIE_CAST[FAILURE], { response }),
};

export const MOVIE_SIMILAR = createRequestTypes('MOVIE_SIMILAR');
export const movieSimilar = {
  request: () => createAction(MOVIE_SIMILAR[REQUEST]),
  success: response => createAction(MOVIE_SIMILAR[SUCCESS], { response }),
  failure: response => createAction(MOVIE_SIMILAR[FAILURE], { response }),
};

export const MOVIE_REVIEWS = createRequestTypes('MOVIE_REVIEWS');
export const movieReviews = {
  request: () => createAction(MOVIE_REVIEWS[REQUEST]),
  success: response => createAction(MOVIE_REVIEWS[SUCCESS], { response }),
  failure: response => createAction(MOVIE_REVIEWS[FAILURE], { response }),
};
