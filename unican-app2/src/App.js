import { Redirect, Route, Switch, useLocation } from "react-router";
import "./App.css";
import Navbar from "./Components/UI/Navbar/Navbar";
import HomePage from "./Containers/HomePage";
import CatalogPage from "./Containers/CatalogPage/CatalogPage";
import Footer from "./Components/UI/Footer/Footer";
import AboutPage from "./Containers/AboutPage/AboutPage";
import { useEffect } from "react";
import ContactPage from "./Containers/ContactPage/ContactPage";
import AdminPage from "./Containers/AdminPage/AdminPage";

/**
 * TODO
 * * filtrar inputs con nombres
 * * inputs multivalor
 * * inputs de imagenes
 * * administrador de categorías
 * * adminsitrador de imágenes
 *
 * 5) animaciones
 * 6) revisar valores
 * 7) "su mejor socio en soluciones"
 * 8) "brindar soluciones de inyección"
 * 9) colores como cuadritos
 * 10) texto expandible en valores
 * 11) mapa estático de google
 * 12) formulario de contacto
 */

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
          <ContactPage></ContactPage>
        </Route>
        <Route path="/admin">
          <AdminPage></AdminPage>
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
