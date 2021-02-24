/* eslint-disable import/no-named-default */
import styled from 'styled-components';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const Grid = styled(ButtonToolbar)`
  display: inline-flex;
  flex-wrap: wrap;
  gap: calc(var(--app-gap-width) / 2);
`;

export default Grid;
