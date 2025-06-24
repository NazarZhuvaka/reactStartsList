import { Component } from 'react';

import style from './SideBar.module.css'

class SideBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
      }
    }

    render() {
        return (
            <aside className={style.sideBar}>
                <nav>
                    <ul>
                        <li>
                            <button>All</button>
                        </li>
                        <li>
                            <button>With twitter</button>
                        </li>
                        <li>
                            <button>With instagram</button>
                        </li>
                        <li>
                            <button>With linkedin</button>
                        </li>
                    </ul>
                </nav>
            </aside>
        );
    }
}

export default SideBar;
