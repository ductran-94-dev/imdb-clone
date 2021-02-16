import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1rem 1rem;
  grid-template-areas:
    'poster poster video video video video video posterBox posterBox'
    'poster poster video video video video video videoBox videoBox';

  padding: 2rem 0;

  & > div {
    img {
      width: 100%;
    }
  }

  & > div:nth-child(1) {
    grid-area: poster;
  }

  & > div:nth-child(2) {
    grid-area: video;
  }

  & > div:nth-child(3) {
    grid-area: posterBox;
  }

  & > div:nth-child(4) {
    grid-area: videoBox;
  }
`;

export default Wrapper;
