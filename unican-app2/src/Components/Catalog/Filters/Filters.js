import classes from "./Filters.module.css";

const CATEGORIES = ["Cubetas", "Bidones", "Canastas"];

const Filters = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Column}>
        <h3>Buscar por nombre</h3>
        <input onChange={(e) => props.setNameFilter(e.target.value)}></input>
      </div>
      <div className={classes.Column}>
        <h3>Buscar por categoría</h3>
        <ul>
          {CATEGORIES.map((el, i) => (
            <li
              onClick={() =>
                el === props.categoryFilter
                  ? props.setCategoryFilter()
                  : props.setCategoryFilter(el)
              }
              className={el === props.categoryFilter ? classes.Active : ""}
              key={i}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filters;
