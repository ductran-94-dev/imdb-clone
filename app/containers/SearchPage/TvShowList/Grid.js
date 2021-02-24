/* eslint-disable import/no-named-default */
import styled from 'styled-components';
import { default as NormalGrid } from 'components/Grid';

const Grid = styled(NormalGrid)`
  & > div {
    display: none;
  }

  & > div:nth-child(1),
  & > div:nth-child(2) {
    display: block;
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}px) {
    & > div:nth-child(3) {
      display: block;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    & > div:nth-child(4) {
      display: block;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    & > div:nth-child(5) {
      display: block;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}px) {
    & > div:nth-child(6) {
      display: block;
    }
  }
`;

export default Grid;
