import { Component } from "react";

import UsersListItem from "./UsersListItem";

import defultUserIcon from "./userDefultIcon.png";
import style from "./UserList.module.css";

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: defultUserIcon,
      users: [],
    };
  }

  errorLoadingImg = ({ target }) => {
    target.onerror = null;
    target.src = defultUserIcon;
  };

  mapUser = (u) => {
    return (
      <UsersListItem
        key={u.id}
        user={u}
        onError={this.errorLoadingImg}
        defIcon={defultUserIcon}
        style={style}
      />
    );
  };

  componentDidMount() {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newUsers = data.map((u) => ({
          ...u,
          isSelected: false,
        }));
        this.setState({ users: newUsers });
      })
      .catch((error) => console.error(`Loading error: ${error}`));
  }

  render() {
    const { users } = this.state;
    return <ul>{users.map(this.mapUser)}</ul>;
  }
}

export default UserList;
