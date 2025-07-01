import { Component } from 'react';

import style from './SideBar.module.css'

class SideBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
      }
    }

    handleClick = (socialNetworkName) => {
        if(socialNetworkName === 'all') {
            this.props.setFilteredUsers([]);
        }

        const filteredUsers = this.props.users.filter(user =>
            user.contacts.some(item => item.toLowerCase().includes(socialNetworkName) ? true : false));
            this.props.setFilteredUsers(filteredUsers);
    }

    render() {
        return (
            <aside className={style.sideBar}>
                <nav>
                    <ul>
                        <li>
                            <button onClick={() => this.handleClick("all")}>All</button>
                        </li>
                        <li>
                            <button onClick={() => this.handleClick("twitter")}>With twitter</button>
                        </li>
                        <li>
                            <button onClick={() => this.handleClick("facebook")}>With facebook</button>
                        </li>
                        <li>
                            <button onClick={() => this.handleClick("instagram")}>With instagram</button>
                        </li>
                        <li>
                            <button onClick={() => this.handleClick("linkedin")}>With linkedin</button>
                        </li>
                    </ul>
                </nav>
            </aside>
        );
    }
}

export default SideBar;
