import React from "react";
import classes from "./Form.module.scss";
import Button from "../Button/Button";

const Form = () => {
  return (
    <form className={classes.form}>
      <input
        placeholder="First Name"
        type="text"
        className={classes.form__input}
      />
      <input
        placeholder="Last Name"
        type="text"
        className={classes.form__input}
      />
      <input
        placeholder="Email Address"
        type="email"
        className={classes.form__input}
      />
      <input
        placeholder="Password"
        type="password"
        className={classes.form__input}
      />
      <Button>Claim your free trial</Button>
      <p className={classes.form__text}>
        By clicking the button, you are agreeing to our
        <button className={classes.form__link}>Terms and Services</button>
      </p>
    </form>
  );
};

export default Form;
