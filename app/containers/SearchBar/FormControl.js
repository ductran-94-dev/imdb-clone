import styled from 'styled-components';
import { FormControl as NormalFormControl } from 'react-bootstrap';

const FormControl = styled(NormalFormControl)`
  width: 300px;

  border-radius: 50px;
  border-color: var(--app-secondary);

  background-color: var(--app-secondary);
`;

export default FormControl;
