import Header from "./Header/Header";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className={classes.Videos}>
        <video autoPlay muted controls loop>
          <source src={video1} type="video/mp4" />
        </video>
        <video autoPlay muted controls loop>
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HomePage;
