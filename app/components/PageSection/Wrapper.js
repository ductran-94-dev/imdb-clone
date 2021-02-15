import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0rem 0rem;
  margin: 0;

  & + section {
    margin-top: 1rem;
  }
`;

export default Wrapper;
