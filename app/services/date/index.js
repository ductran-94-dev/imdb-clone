export function getYearAtReleaseDate(releaseDate) {
  const [year] = releaseDate.split('-');

  return year;
}
