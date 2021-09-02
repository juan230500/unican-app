import Product from "./Product/Product";
import classes from "./Products.module.css";

const Products = (props) => {
  const productItems = props.products
    .sort(
      (a, b) =>
        props.categories.findIndex((el) => el === a.category) -
        props.categories.findIndex((el) => el === b.category)
    )
    .map((el, i) => (
      <Product onClick={() => props.setDetail(el)} key={i} {...el}></Product>
    ));

  return <div className={classes.Container}>{productItems}</div>;
};

export default Products;
