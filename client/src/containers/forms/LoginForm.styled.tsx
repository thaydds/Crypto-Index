import styled from 'styled-components';
import { ErrorMessage } from 'formik';

export const StyledFormDiv = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  padding: 5px;
  flex-direction: column;
  background-color: white;
`;

export const Error = styled(ErrorMessage)`
  color: red;
  padding: 5px;
`;
