import React, { useState } from "react";
import classes from "./AboutPage.module.css";
import Info from "./Info/Info";
//import aboutJson from "../../assets/about/about.json";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const AboutPage = () => {
  const [index, setIndex] = useState(-1);
  const [items, setItems] = useState([]);

  const get = async () => {
    const response = await axios.get(BASE_URL + "about");
    setItems(response.data || []);
  };

  useState(() => get(), []);

  return (
    <div className={classes.About}>
      <div className={classes.Column}>
        {items.map((el, i) =>
          el.level > 1 ? (
            <h1>{el.text}</h1>
          ) : (
            <Info
              onExpand={() => setIndex(i === index ? -1 : i)}
              expanded={index === i}
              {...el}
              focus
            ></Info>
          )
        )}
      </div>
      <div className={classes.Column}>
        {items.map((el, i) => (
          <Info
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: index === i ? 1 : 0,
            }}
            onExpand={() => setIndex(-1)}
            expanded={index !== i}
            showText={index === i}
            {...el}
          ></Info>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
