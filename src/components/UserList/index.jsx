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
        const newUsers = data.map((u) => ({
          ...u,
        }));
        this.setState({ users: newUsers });
      })
      .catch((error) => console.error(`Loading error: ${error}`));
  }

  render() {
    const { users } = this.state;

    return <ul className={style.productsList}>{users.map(this.mapUser)}</ul>;
  }
}

export default UserList;
