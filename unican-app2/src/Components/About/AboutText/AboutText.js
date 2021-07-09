import classes from "./AboutText.module.css";
import * as Icons from "react-icons/fa";
import IconBall from "../../UI/IconBall/IconBall";
import aboutJson from "../../../assets/about.json";

const AboutText = () => {
  const items = aboutJson.sections.map((el) => {
    const Icon = el.icon ? Icons[el.icon] : null;
    return (
      <div className={classes.Row}>
        {Icon && (
          <div>
            <IconBall>
              <Icon></Icon>
            </IconBall>
          </div>
        )}
        <div>
          <h1
            style={{ fontSize: el.level === 1 ? 40 : 24 }}
            id={el.title}
          >
            {el.title}
          </h1>
          <p>{el.text}</p>
        </div>
      </div>
    );
  });

  return <div className={classes.Container}>{items}</div>;
};

export default AboutText;
