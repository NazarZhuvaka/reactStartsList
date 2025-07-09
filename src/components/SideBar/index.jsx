import { Component } from "react";
import SearchBtn from "./SearchBtn";

import style from "./SideBar.module.css";

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClick = (socialNetworkName) => {
    if (socialNetworkName === "all") {
      this.props.setFilteredUsers([]);
    }
    console.log("click");
    const filteredUsers = this.props.users.filter((user) =>
      user.contacts.some((item) =>
        item.toLowerCase().includes(socialNetworkName) ? true : false
      )
    );
    this.props.setFilteredUsers(filteredUsers);
  };

  render() {
    return (
      <aside className={style.sideBar}>
        <nav>
          <SearchBtn clickMyFunc={this.handleClick} />
        </nav>
      </aside>
    );
  }
}

export default SideBar;
