import { Component } from "react";

import UsersListItem from "./UsersListItem";

import defultUserIcon from "./userDefultIcon.png";
import style from "./UserList.module.css";

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: defultUserIcon,
    };
  }

  errorLoadingImg = ({ target }) => {
    target.onerror = null;
    target.src = defultUserIcon;
  };

  mapUser = (u) => {
    const {isLight} = this.props

    return (
      <UsersListItem
        key={u.id}
        user={u}
        onError={this.errorLoadingImg}
        defIcon={defultUserIcon}
        style={style}
        isLight={isLight}
      />
    );
  };

  componentDidMount() {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.props.setUsers(data);
      })
      .catch((error) => console.error(`Loading error: ${error}`));
  }

  render() {
    const { users, filteredUsers } = this.props;

    return <ul className={style.productsList}>{
      filteredUsers.length ? filteredUsers.map(this.mapUser) : users.map(this.mapUser)
      }</ul>;
  }
}

export default UserList;
