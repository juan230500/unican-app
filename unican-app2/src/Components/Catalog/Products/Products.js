import { CATEGORIES } from "../../../utils/constants";
import Product from "./Product/Product";
import classes from "./Products.module.css";

const Products = (props) => {
  const productItems = props.products
    .sort(
      (a, b) =>
        CATEGORIES.findIndex((el) => el === a.category) -
        CATEGORIES.findIndex((el) => el === b.category)
    )
    .map((el, i) => (
      <Product onClick={() => props.setDetail(el)} key={i} {...el}></Product>
    ));

  return <div className={classes.Container}>{productItems}</div>;
};

export default Products;
