import Header from "./Header/Header";
import classes from "./HomePage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const HomePage = () => {
  const [homeData, setHomeData] = useState({
    title: "",
    subtitle: "",
    imgs: [],
    vids: [],
  });

  const get = async () => {
    const res = await axios.get(BASE_URL + "home");
    res.data && setHomeData(res.data);
  };

  useEffect(() => get(), []);

  return (
    <div>
      <Header homeData={homeData} />
      <div className={classes.Videos}>
        {homeData.vids.map((el) => (
          <video autoPlay muted controls loop>
            <source src={el} type="video/mp4" />
          </video>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
