import React from "react";
import classes from "./Form.module.scss";
import Button from "../Button/Button";
import useInput from "../../hooks/useInput";
import IconError from "../../images/icon-error.svg";
const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Form = () => {
  const textInputValidate = (enteredValue) => enteredValue.trim() !== "";
  const {
    value: enteredfName,
    hasError: fNameHasError,
    isValid: fNameIsValid,
    valueChangeHandler: fNameChangeHandler,
    onBlurInputHandler: fNameOnBlurHandler,
    reset: fNameReset,
  } = useInput(textInputValidate);
  const {
    value: enteredlName,
    hasError: lNameHasError,
    isValid: lNameIsValid,
    valueChangeHandler: lNameChangeHandler,
    onBlurInputHandler: lNameOnBlurHandler,
    reset: lNameReset,
  } = useInput(textInputValidate);
  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    onBlurInputHandler: emailOnBlurHandler,
    reset: emailReset,
  } = useInput((email) => regEmail.test(email));
  const {
    value: enteredPassword,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    onBlurInputHandler: passwordOnBlurHandler,
    reset: passwordReset,
  } = useInput(textInputValidate);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!fNameIsValid || !lNameIsValid || !emailIsValid || !passwordIsValid) {
      return;
    }
    alert(`Submitted: ${enteredfName} ${enteredlName}, ${enteredEmail}`)
    fNameReset();
    lNameReset();
    emailReset();
    passwordReset();
  };
  const fNameClasses = `${classes.form__input} ${
    !fNameHasError ? "" : classes.form__invalid
  }`;
  const lNameClasses = `${classes.form__input} ${
    !lNameHasError ? "" : classes.form__invalid
  }`;
  const emailClasses = `${classes.form__input} ${
    !emailHasError ? "" : classes.form__invalid
  }`;
  const passwordClasses = `${classes.form__input} ${
    !emailHasError ? "" : classes.form__invalid
  }`;
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={classes.form__group}>
        <input
          placeholder={!fNameHasError && "First Name"}
          type="text"
          className={fNameClasses}
          value={enteredfName}
          onChange={fNameChangeHandler}
          onBlur={fNameOnBlurHandler}
        />
        {fNameHasError && (
          <img
            src={IconError}
            alt="Icon for an error"
            className={classes.error__icon}
          />
        )}
      </div>
      {fNameHasError && (
        <p className={classes.error__text}>First Name cannot be empty</p>
      )}
      <div className={classes.form__group}>
        <input
          placeholder={!lNameHasError && "Last Name"}
          type="text"
          className={lNameClasses}
          value={enteredlName}
          onChange={lNameChangeHandler}
          onBlur={lNameOnBlurHandler}
        />
        {lNameHasError && (
          <img
            src={IconError}
            alt="Icon for an error"
            className={classes.error__icon}
          />
        )}
      </div>
      {lNameHasError && (
        <p className={classes.error__text}>Last Name cannot be empty</p>
      )}

      <div className={classes.form__group}>
        <input
          placeholder={!emailHasError && "Email Address"}
          type="email"
          className={emailClasses}
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailOnBlurHandler}
        />
        {emailHasError && (
          <img
            src={IconError}
            alt="Icon for an error"
            className={classes.error__icon}
          />
        )}
      </div>
      {emailHasError && (
        <p className={classes.error__text}>Looks like this is not an email</p>
      )}

      <div className={classes.form__group}>
        <input
          placeholder={!passwordHasError && "Password"}
          type="password"
          className={passwordClasses}
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={passwordOnBlurHandler}
        />
        {passwordHasError && (
          <img
            src={IconError}
            alt="Icon for an error"
            className={classes.error__icon}
          />
        )}
      </div>
      {passwordHasError && (
        <p className={classes.error__text}>Password cannot be empty</p>
      )}

      <Button>Claim your free trial</Button>
      <p className={classes.form__text}>
        By clicking the button, you are agreeing to our
        <button className={classes.form__link}>Terms and Services</button>
      </p>
    </form>
  );
};

export default Form;
