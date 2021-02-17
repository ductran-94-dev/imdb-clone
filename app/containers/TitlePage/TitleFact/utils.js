const getStars = titleCast => {
  if (!titleCast) return [];

  return titleCast.filter((_, idx) => idx < 3).map(item => item.name);
};

const getDirector = titleCrew => {
  if (!titleCrew) return [];

  return titleCrew
    .filter(item => item.job === 'Director')
    .filter((_, idx) => idx < 1)
    .map(item => item.name);
};

const getWriter = titleCrew => {
  if (!titleCrew) return [];

  return titleCrew
    .filter(item => item.job !== 'Director')
    .filter((_, idx) => idx < 3)
    .map(item => item.name);
};

export const getFact = (titleCast, titleCrew) => {
  const fact = [
    {
      title: 'Director',
      content: getDirector(titleCrew),
    },
    {
      title: 'Writers',
      content: getWriter(titleCrew),
    },
    {
      title: 'Stars',
      content: getStars(titleCast),
    },
  ];

  return fact;
};
