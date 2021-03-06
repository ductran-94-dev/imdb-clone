import styled from 'styled-components';
import mixins from 'utils/mixins';

const Title = styled.h3`
  ${mixins.textTruncate};

  width: 100%;
  margin: 0;

  font-size: 1rem;
  font-weight: 400;
`;

export default Title;
