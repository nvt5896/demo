import "./Nav.css";
import React from 'react';
import {Link} from 'react-router-dom';
import {MenuItem} from "./MenuItem";

class Nav extends React.Component {
    render() {
        return (
            <nav className="nav">
                <h1 className="nav_logo">Demo</h1>
                <ul className="nav_menu">
                    {MenuItem.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })
                    }
                </ul>
            </nav>
        );
    }
}
export default Nav;
