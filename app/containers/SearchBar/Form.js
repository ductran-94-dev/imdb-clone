import styled from 'styled-components';
import { Form as NormalForm } from 'react-bootstrap';
import mixins from 'utils/mixins';

const Form = styled(NormalForm)`
  ${mixins.boxShadow};

  width: 300px;
`;

export default Form;
