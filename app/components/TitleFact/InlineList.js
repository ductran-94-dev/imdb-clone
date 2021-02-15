import styled from 'styled-components';

const InlineList = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;

  padding: 0;
  margin: 0;
  margin-left: 1rem;

  color: var(--link-hover-color);
`;

export default InlineList;
