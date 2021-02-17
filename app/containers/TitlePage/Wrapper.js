import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  column-gap: calc(var(--app-gap-width) * 1);
  row-gap: calc(var(--app-gap-width) * 2);
  grid-template-rows: min-content;
  grid-template-areas:
    'groupA groupA groupA'
    'groupB groupB groupB'
    'recentlyReview recentlyReview recentlyReview';

  padding-top: calc(var(--app-gap-width) * 2);

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    grid-template-areas:
      'groupA groupA groupA'
      'groupB groupB moreToExplore'
      'recentlyReview recentlyReview recentlyReview';
  }

  & > div:nth-child(1) {
    grid-area: groupA;
  }
  & > div:nth-child(2) {
    grid-area: groupB;
  }
  & > div:nth-child(3) {
    grid-area: moreToExplore;
    display: none;

    @media (min-width: ${props => props.theme.breakpoints.lg}px) {
      display: inherit;
    }
  }
  & > div:nth-child(4) {
    grid-area: recentlyReview;
  }
`;

export default Wrapper;
