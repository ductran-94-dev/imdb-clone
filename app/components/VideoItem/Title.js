import styled from 'styled-components';
import mixins from 'utils/mixins';

const Title = styled.h3`
  ${mixins.textTruncate};

  margin: 0;

  color: var(--app-primary-text);
  font-size: 1rem;
`;

export default Title;
