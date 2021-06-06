import Item from "../../UI/Item/Item";
import classes from "./Products.module.css";

const Products = (props) => {
  const productItems = props.products
    .filter((el) =>
      el.title.toLowerCase().includes(props.nameFilter.toLowerCase())
    )
    .filter(
      (el) => !props.categoryFilter || el.category === props.categoryFilter
    )
    .map((el, i) => (
      <Item
        onClick={() => props.setDetail(el)}
        key={i}
        className={classes.CustomItem}
        {...el}
      ></Item>
    ));

  return <div className={classes.Container}>{productItems}</div>;
};

export default Products;
