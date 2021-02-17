import styled from 'styled-components';
import mixins from 'utils/mixins';

const Title = styled.h3`
  ${mixins.textTruncate};

  font-size: 1rem;
  color: var(--app-pallete-text-secondary);
`;

export default Title;
