import styled from 'styled-components';
import mixins from 'utils/mixins';

const Subtitle = styled.h3`
  ${mixins.textTruncate};

  margin: 0;
  margin-top: 3px;

  color: var(--app-secondary-text);
  font-size: 0.8rem;
`;

export default Subtitle;
