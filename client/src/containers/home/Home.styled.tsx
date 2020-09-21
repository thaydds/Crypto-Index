import styled from 'styled-components';

export const StyledCard = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 150px;
  text-align: center;
  padding: 10px;
  border-radius: 5px;

  :hover {
    background-color: #2bcc9e;
  }

  p {
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.2rem;
  }

  span {
    padding: 5px;
    font-weight: lighter;
    font-style: italic;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  @media all and (max-width: 600px) {
    width: 0px;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledH2 = styled.h2`
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.2rem;
`;

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 200px;
`;
