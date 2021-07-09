import Product from "./Product/Product";
import classes from "./Products.module.css";

const Products = (props) => {
  const productItems = props.products
    .map((el, i) => (
      <Product
        onClick={() => props.setDetail(el)}
        key={i}
        {...el}
      ></Product>
    ));

  return <div className={classes.Container}>{productItems}</div>;
};

export default Products;
