import "./App.css";

import { Component } from "react";
import Header from "./components/Header";
import LogForm from "./components/LogForm";
import UserList from "./components/UserList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
      isLight: true,
    };
  }

  handleClick = () => {
    const { isLogin } = this.state;
    this.setState({
      isLogin: !isLogin,
    });
  };

  switchTheme = () => {
    const { isLight } = this.state;
    this.setState({
      isLight: !isLight,
    });
  };

  render() {
    const { isLogin, isLight } = this.state;

    const inlineStyles = {
      color: isLight ? "black" : "white",
      backgroundColor: isLight ? "white" : "black",
    };
    const body = (
      <div style={inlineStyles}>
        <Header
          isLogin={isLogin}
          logIn={this.handleClick}
          isLight={isLight}
          switchHandler={this.switchTheme}
          inlineStyles={inlineStyles}
        />
        <UserList/>
      </div>
    );

    return (
      <>
        {isLogin ? (
          body
        ) : (
          <LogForm isLogin={isLogin} logIn={this.handleClick} />
        )}
        {/* <button onClick={this.handleClick}>
          {isLogin ? "Log out" : "Log in"}
        </button> */}
        {/* <LogInButton isLogin={isLogin} logIn={this.handleClick}/> */}
      </>
    );
  }
}

export default App;
