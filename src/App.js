import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container } from "@material-ui/core";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <Container>
      <h1>Counter {counter}</h1>
      <Button onClick={() => dispatch(increment(5))}>+5</Button> 
      <Button onClick={() => dispatch(decrement())}>-1</Button>
      {isLogged ? <h3>Valuable Information</h3> : ""}
    </Container>
  );
}

export default App;
