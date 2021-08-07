import React, { useState } from "react";
import classes from "./AboutPage.module.css";
import Info from "./Info/Info";
import aboutJson from "../../assets/about/about.json";

const AboutPage = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div className={classes.About}>
      <div className={classes.Column}>
        {aboutJson.group1.map((el, i) =>
          el.level > 1 ? (
            <h1>{el.title}</h1>
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
        {aboutJson.group1.map((el, i) => (
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
