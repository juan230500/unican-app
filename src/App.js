import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Containers/HomePage";

function App() {
  return (
    <div className="App" onScroll={(e) => console.log(e.target)}>
      <Navbar top={window.pageYOffset === 0}></Navbar>
      <Switch>
        <Route path="/home">
          <HomePage></HomePage>
        </Route>
        <Route path="/catalog">
          <HomePage></HomePage>
        </Route>
        <Route path="/about">
          <HomePage></HomePage>
        </Route>
        <Route path="/contact">
          <HomePage></HomePage>
        </Route>
        <Redirect to="/home"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
