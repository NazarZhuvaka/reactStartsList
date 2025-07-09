import { Component } from "react";
import classNames from "classnames";
import LogInButton from "../LogInBtn";
import styles from "./LogInForm.module.css";

const INITIAL_VALUES = { email: "", password: "" };
const LOGINFORM_REX_EXP = {
  email: /^.+@+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*].*).{8,20}$/,
};

class LogInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: INITIAL_VALUES.email,
      isEmailValid: false,
      password: INITIAL_VALUES.password,
      isPasswordValid: false,
    };
  }

  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      email: value,
      isEmailValid: LOGINFORM_REX_EXP.email.test(value),
    });
  };

  handlePasswodChange = ({ target: { value } }) => {
    this.setState({
      password: value,
      isPasswordValid: LOGINFORM_REX_EXP.password.test(value),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // send request
    this.setState(INITIAL_VALUES);
  };

  render() {
    const { email, password, isEmailValid, isPasswordValid } = this.state;
    const { logIn } = this.props;
    // const emailClassName = `${styles.input} ${isEmailValid ? styles.inputValid : styles.inputInValid}`
    const emailClassName = classNames(styles.input, {
      [styles.inputValid]: isEmailValid,
      [styles.inputInValid]: !isEmailValid,
    });

    const passwordClassName = classNames(styles.input, {
      [styles.inputValid]: isPasswordValid,
      [styles.inputInValid]: !isPasswordValid,
    });

    return (
      <div className={styles.formContainer}>
        <h1 className={styles.formHeader}>LogInForm</h1>
        <form className={styles.logInForm} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            <span className={styles.inputName}>Email</span>
            <input
              className={emailClassName}
              type="email"
              name="email"
              value={email}
              placeholder="your@email"
              autoFocus
              onChange={this.handleEmailChange}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>Password</span>
            <input
              className={passwordClassName}
              type="password"
              name="password"
              value={password}
              onChange={this.handlePasswodChange}
              placeholder="Enter your password"
            />
          </label>
          <LogInButton logIn={logIn} disabled={!(isEmailValid && isPasswordValid)} />
        </form>
      </div>
    );
  }
}

export default LogInForm;
