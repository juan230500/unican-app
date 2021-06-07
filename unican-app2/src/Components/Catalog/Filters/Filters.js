import Input from "../../UI/Input/Input";
import classes from "./Filters.module.css";

const CATEGORIES = ["Cubetas", "Bidones", "Canastas"];

const Filters = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Column}>
        <h3>Buscar por nombre</h3>
        <Input onChange={(e) => props.setNameFilter(e.target.value)}></Input>
      </div>
      <div className={classes.Column}>
        <h3>Buscar por categoría</h3>
        {CATEGORIES.map((el, i) => (
          <span
            onClick={() =>
              el === props.categoryFilter
                ? props.setCategoryFilter()
                : props.setCategoryFilter(el)
            }
            className={el === props.categoryFilter ? classes.Active : ""}
            key={i}
          >
            {el}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Filters;
