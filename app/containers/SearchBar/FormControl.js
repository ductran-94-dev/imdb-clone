import styled from 'styled-components';
import { FormControl as NormalFormControl } from 'react-bootstrap';

const FormControl = styled(NormalFormControl)`
  width: 300px;
  height: 40px;
  border-radius: 50px;
  border-color: var(--app-secondary);

  font-size: 1rem;
  background-color: var(--app-secondary);
`;

export default FormControl;
