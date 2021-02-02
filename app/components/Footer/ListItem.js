import styled from 'styled-components';

const ListItem = styled.li`
  padding: 0.5rem;
  list-style-type: none;

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
`;

export default ListItem;
