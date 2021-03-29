import StyledArticle from "./styled/StyledArticle";
import Counter from "./Counter";
import StyledApp from "./styled/StyledApp";
import Rating from "./Rating";

function App() {

  return (
    <StyledApp>
      <StyledArticle>
        <Counter />
      </StyledArticle>

      <StyledArticle>
        <Rating />
      </StyledArticle>
    </StyledApp>
  );
}

export default App;
