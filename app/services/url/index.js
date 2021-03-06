export const getSearchParam = (location, name) => {
  if (!location || !location.search) {
    return null;
  }
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(name);
};

export const getPoster = posterPath => {
  if (!posterPath) return null;

  return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterPath}`;
};

export const getBackdrop = backdropPath => {
  if (!backdropPath) return null;

  return `https://www.themoviedb.org/t/p/w440_and_h660_face${backdropPath}`;
};

export const getProfilePath = profilePath => {
  if (!profilePath) return null;

  return `https://www.themoviedb.org/t/p/w276_and_h350_face${profilePath}`;
};
