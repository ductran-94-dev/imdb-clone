import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0 2rem;
  margin: 0;

  background-color: #141414;

  & + section {
    margin-top: 1rem;
  }
`;

export default Wrapper;
