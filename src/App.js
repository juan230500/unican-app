import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Navbar from "./Components/UI/Navbar/Navbar";
import HomePage from "./Containers/HomePage";
import CatalogPage from "./Containers/CatalogPage/CatalogPage";
import Footer from "./Components/UI/Footer/Footer";
import AboutPage from "./Containers/AboutPage/AboutPage";

function App() {
  return (
    <div className="App" onScroll={(e) => console.log(e.target)}>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
        <Route path="/catalog">
          <CatalogPage></CatalogPage>
        </Route>
        <Route path="/about">
          <AboutPage></AboutPage>
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
