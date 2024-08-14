import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

// const H1 = styled.h1`
//   font-size: 30px;
//   font-weight: 600;
//   background-color: yellow;
// `;

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="horizontal">
          <Heading as="h1">The wild Oasis</Heading>
          <Button
            onClick={() => alert("check in")}
          >
            Check in
          </Button>
          <Input type="number" placeholder="Number of guests"></Input>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
