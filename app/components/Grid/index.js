/**
 *
 * Grid
 *
 */

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-gap: var(--app-gap-width);
  grid-template-columns: repeat(${props => props.xs || 1}, minmax(0, 1fr));

  ${props =>
    props.sm &&
    css`
      @media (min-width: ${props.theme.breakpoints.sm}px) {
        grid-template-columns: repeat(${props.sm}, minmax(0, 1fr));
      }
    `}

  ${props =>
    props.md &&
    css`
      @media (min-width: ${props.theme.breakpoints.md}px) {
        grid-template-columns: repeat(${props.md}, minmax(0, 1fr));
      }
    `}

  ${props =>
    props.lg &&
    css`
      @media (min-width: ${props.theme.breakpoints.lg}px) {
        grid-template-columns: repeat(${props.lg}, minmax(0, 1fr));
      }
    `}

  ${props =>
    props.xl &&
    css`
      @media (min-width: ${props.theme.breakpoints.xl}px) {
        grid-template-columns: repeat(${props.xl}, minmax(0, 1fr));
      }
    `}
`;

Grid.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  sl: PropTypes.number,
};

export default Grid;
