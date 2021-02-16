import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import mixins from 'utils/mixins';

const Link = styled(NavLink)`
  ${mixins.transdrop};
`;

export default Link;
