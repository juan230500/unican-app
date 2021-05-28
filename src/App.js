import { Redirect, Route, Switch, useLocation } from "react-router";
import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./Components/UI/Navbar/Navbar";
import HomePage from "./Containers/HomePage";
import CatalogPage from "./Containers/CatalogPage/CatalogPage";
import Footer from "./Components/UI/Footer/Footer";

function App() {
  const [top, setTop] = useState(true);
  const location = useLocation();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setTop(window.pageYOffset < 40 && location.pathname === "/");
    });
  }, [location.pathname]);

  useEffect(() => {
    setTop(location.pathname === "/");
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App" onScroll={(e) => console.log(e.target)}>
      <Navbar transparent={top}></Navbar>
      <Switch>
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
        <Route path="/catalog">
          <CatalogPage></CatalogPage>
        </Route>
        <Route path="/about">
          <HomePage></HomePage>
        </Route>
        <Route path="/contact">
          <HomePage></HomePage>
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
