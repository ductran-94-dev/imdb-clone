import styled from 'styled-components';

const Subtitle = styled.li`
  display: inline-block;
  color: inherit;
  vertical-align: middle;

  &:not(:first-child):before {
    display: inline-block;
    content: '.';
    font-size: 0.75rem;
    line-height: 0.5rem;
    padding: 0 0.5rem 0.55rem 0.5rem;
    vertical-align: middle;
  }
`;

export default Subtitle;
