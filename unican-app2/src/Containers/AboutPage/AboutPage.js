import React, { useState } from "react";
import classes from "./AboutPage.module.css";
import Info from "./Info/Info";
import aboutJson from "../../assets/about/about.json";

const AboutPage = () => {
  const [index, setIndex] = useState(-1);
  return (
    <div className={classes.About}>
      <div className={classes.Column}>
        {aboutJson.sections.map((el, i) => (
          <Info
            onExpand={() => setIndex(i === index ? -1 : i)}
            expanded={index === i}
            title={el.title}
            text={el.text}
          ></Info>
        ))}
      </div>
      <div className={classes.Column}>
        {aboutJson.sections.map((el, i) => (
          <Info
            style={{ position: "absolute", width: "100%", height: "100%" }}
            onExpand={() => setIndex(-1)}
            expanded={index !== i}
            showText={index === i}
            title={el.title}
            text={el.text}
            certify={el.certify}
          ></Info>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
