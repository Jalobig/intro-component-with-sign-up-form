import React from "react";
import classes from "./Intro.module.scss";
import BGDesktop from "../../images/bg-intro-desktop.png";
import BGMobile from "../../images/bg-intro-mobile.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import Banner from "../../components/Banner/Banner";
import Form from "../../components/Form/Form";

const Intro = () => {
  const media = useMediaQuery("only screen and (max-width:375px)");
  return (
    <main className={classes.intro}>
      {!media && (
        <img
          src={BGDesktop}
          alt="Background for the intro section"
          className={classes.intro__bg}
        />
      )}
      {media && (
        <img
          src={BGMobile}
          alt="Background for the intro section"
          className={classes.intro__bg}
        />
      )}
      <div className={classes.intro__row}>
        <div className={classes.intro__column}>
          <h1 className={classes.intro__heading}>
            Learn to code by watching others
          </h1>
          <p className={classes.intro__text}>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className={classes.intro__column}>
          <Banner />
          <Form />
        </div>
      </div>
    </main>
  );
};

export default Intro;
