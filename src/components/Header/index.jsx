import ThemeButton from "./ThemeButton";
import LogInButton from "../LogInBtn";
import HeaderLinks from "./HeaderLinks";

import styles from './Header.module.css'

import { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isLogin, logIn, isLight, switchHandler, inlineStyles } = this.props;

    return (
      <header className={styles.header}>
        <a href="#!">My Starts List</a>

        <HeaderLinks style={styles} />

        <div className={styles.btnsCon}>
          <ThemeButton
            style={styles}
            isLight={isLight}
            switchHandler={switchHandler}
            inlineStyles={inlineStyles}
          />
          <LogInButton isLogin={isLogin} logIn={logIn} />
        </div>
      </header>
    );
  }
}

export default Header;
