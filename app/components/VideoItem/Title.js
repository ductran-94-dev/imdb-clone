import styled from 'styled-components';
import mixins from 'utils/mixins';

const Title = styled.h3`
  ${mixins.textTruncate};

  margin: 0;

  color: var(--app-pallete-text-primary);
  font-size: 1rem;
`;

export default Title;
