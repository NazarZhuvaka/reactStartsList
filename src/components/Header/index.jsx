import ThemeButton from "./ThemeButton";
import LogInButton from "../LogInBtn";

import { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {isLogin, logIn, isLight, switchHandler, inlineStyles} = this.props
    console.log(this.props)
    return (
      <header>
        <a href="#!">My shop</a>
        <ul>
          <li>
            <a href="#!Home" className="headerLink">
              Home
            </a>
          </li>
          <li>
            <a href="#!About" className="headerLink">
              About
            </a>
          </li>
          <li>
            <a href="#!Contcats" className="headerLink">
              Contcats
            </a>
          </li>
        </ul>
        <div>
          <ThemeButton isLight={isLight} switchHandler={switchHandler} inlineStyles={inlineStyles}/>
          <LogInButton isLogin={isLogin} logIn={logIn}/>
        </div>
      </header>
    );
  }
}

export default Header;
