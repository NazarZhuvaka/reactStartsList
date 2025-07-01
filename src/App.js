import "./App.css";

import { Component } from "react";
import Header from "./components/Header";
import LogForm from "./components/LogForm";
import UserList from "./components/UserList";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
      isLight: true,
      users: [],
      filteredUsers: []
    };
  }

  setUsers = (users) => {
    this.setState(prevState => ({
      ...prevState,
      users
    }));
  };

  setFilteredUsers = (filteredUsers) => {
    this.setState(prevState => ({
      ...prevState,
      filteredUsers
    }));
  };

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
      backgroundColor: isLight ? "white" : "#333",
    };
    const body = (
      <div style={inlineStyles} className="wrapper">
        <Header
          isLogin={isLogin}
          logIn={this.handleClick}
          isLight={isLight}
          switchHandler={this.switchTheme}
          inlineStyles={inlineStyles}
          className="header"
        />
        <main className="main">
          <SideBar className='sideBar' 
          users={this.state.users} 
          setUsers={this.setUsers}  
          setFilteredUsers={this.setFilteredUsers} />
          
          <UserList isLight={isLight} 
          users={this.state.users} 
          setUsers={this.setUsers} 
          filteredUsers={this.state.filteredUsers} />
        </main>

        <Footer className="footer"/>
      </div>
    );

    return (
      <>
        {isLogin ? (
          body
        ) : (
          <LogForm isLogin={isLogin} logIn={this.handleClick} />
        )}
      </>
    );
  }
}

export default App;
