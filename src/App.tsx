import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleArticle from "./Article";
import Counter from "./Counter";

function App() {

  return (
    <SimpleArticle>
      <Counter></Counter>
    </SimpleArticle>
    
  );
}

export default App;
