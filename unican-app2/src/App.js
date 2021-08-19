import { Redirect, Route, Switch, useLocation } from "react-router";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css";

import Navbar from "./Components/UI/Navbar/Navbar";
import HomePage from "./Containers/HomePage/HomePage";
import CatalogPage from "./Containers/CatalogPage/CatalogPage";
import Footer from "./Components/UI/Footer/Footer";
import AboutPage from "./Containers/AboutPage/AboutPage";
import ContactPage from "./Containers/ContactPage/ContactPage";
import AdminPage from "./Containers/AdminPage/AdminPage";

/**
 * TODO
 * *validación de forms [NO URGENTE]
 * *sistema de copias de seguridad [NO URGENTE]
 * *manejo de errores de server del lado del cliente
 *
 * *popup de notificaciones [LISTO]
 * *administrador de categorías [OPCIONAL]
 * *migrar a ec2 [LISTO]
 *
 * 5) animaciones
 * 6) revisar valores
 * 7) "su mejor socio en soluciones"
 * 8) "brindar soluciones de inyección"
 * 9) colores como cuadritos
 * 10) texto expandible en valores
 * 11) mapa estático de google [LISTO]
 * 12) formulario de contacto
 */

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/catalog">
          <CatalogPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
