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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space;
`;

export const Title = styled.p`
  font-size: 0.9rem;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  font-style: bold;
  margin-left: 10px;
`;
