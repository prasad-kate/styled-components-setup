import styled from "styled-components";
import "./App.css";
import { ButtonProps } from "./common/interface";

function App() {
  return (
    <>
      <p>Styled components setup</p>
      <ButtonContainer className="button-container">
        <Button primary>Submit</Button>
        <Button>Submit</Button>
      </ButtonContainer>
    </>
  );
}

export default App;

const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: ${({ primary }) => (primary ? "blue" : "green")};
    color: white;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
