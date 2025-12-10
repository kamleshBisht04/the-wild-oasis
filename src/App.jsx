import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyleApp = styled.div`
  padding: 1.6rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyleApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The wild oasis</Heading>
            <div>
              <Heading as="h2">check in out</Heading>
              <Button onClick={() => alert("you check In")}>Check in</Button>
              <Button size="small" variations="danger" onClick={() => alert("you check out")}>
                Check out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">from</Heading>
            <form>
              <Input placeholder="Number of guests " type="text" />
              <Input placeholder="Number of guests " type="text" />
            </form>
          </Row>
        </Row>
      </StyleApp>
    </>
  );
}

export default App;
