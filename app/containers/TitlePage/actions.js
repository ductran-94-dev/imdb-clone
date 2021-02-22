/*
 *
 * TitlePage actions
 *
 */
import {
  createAction,
  createAsyncAction,
  createRequestTypes,
} from 'utils/actionCreator';

export const CHANGE_TITLE_ID = 'CHANGE_TITLE_ID';
export const changeTitleId = titleId =>
  createAction(CHANGE_TITLE_ID, { titleId });

export const MOVIE_DETAILS = createRequestTypes('MOVIE_DETAILS');
export const movieDetails = createAsyncAction(MOVIE_DETAILS);

export const MOVIE_PHOTOS = createRequestTypes('MOVIE_PHOTOS');
export const moviePhotos = createAsyncAction(MOVIE_PHOTOS);

export const MOVIE_VIDEOS = createRequestTypes('MOVIE_VIDEOS');
export const movieVideos = createAsyncAction(MOVIE_VIDEOS);

export const MOVIE_CAST = createRequestTypes('MOVIE_CAST');
export const movieCast = createAsyncAction(MOVIE_CAST);

export const MOVIE_SIMILAR = createRequestTypes('MOVIE_SIMILAR');
export const movieSimilar = createAsyncAction(MOVIE_SIMILAR);

export const MOVIE_REVIEWS = createRequestTypes('MOVIE_REVIEWS');
export const movieReviews = createAsyncAction(MOVIE_REVIEWS);
