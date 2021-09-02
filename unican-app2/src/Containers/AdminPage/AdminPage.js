import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import classes from "./AdminPage.module.css";
import AuthForm from "./AuthForm/AuthForm";
import CategoryAdmin from "./CategoryAdmin/CategoryAdmin";
import ContactAdmin from "./ContactAdmin/ContactAdmin";
import ProductAdmin from "./ProductAdmin/ProductAdmin";

const AdminPage = () => {
  const [auth, setAuth] = useState(null);

  return (
    <div className={classes.Admin}>
      {!auth ? (
        <AuthForm setAuth={setAuth} />
      ) : (
        <div>
          <div className={classes.Links}>
            <Link to="/admin/products">Productos</Link>
            <Link to="/admin/categories">Categorías</Link>
            <Link to="/admin/contact">Contacto</Link>
          </div>
          <Switch>
            <Route path="/admin/products">
              <ProductAdmin auth={auth} />
            </Route>
            <Route path="/admin/categories">
              <CategoryAdmin auth={auth} />
            </Route>
            <Route path="/admin/contact">
              <ContactAdmin auth={auth} />
            </Route>
          </Switch>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
