import React from 'react';
import { NavLink } from 'react-router-dom';

import { Nav, NavDropdown} from 'react-bootstrap';

import classes from './mainmenu.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faCar } from '@fortawesome/free-solid-svg-icons';

const MainMenu = (props: any) => {
    const version: string = props.version;
    // const mainMenuClasses = [menuClasses.MainMenu, 'navbar-nav mr-auto'].join(' ');
    return (
        <Nav className={classes.NavMenu} variant="pills" activeKey="1">
            <Nav.Item  className={classes.Navlink}>
                <NavLink to="/" exact activeClassName={classes.MyActive}>Home</NavLink>
            </Nav.Item>
            <Nav.Item  className={classes.Navlink}>
                <NavLink to="/big-o" activeClassName={classes.MyActive}>Big O</NavLink>
            </Nav.Item>
            <NavDropdown title="Searches" id="searches-dropdown">
                <NavDropdown.Item>
                    <NavLink to="/searches/linear" activeClassName={classes.MyActive}>Linear Search</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <NavLink to="/searches/binary" activeClassName={classes.MyActive}>Binary Search</NavLink>
                </NavDropdown.Item>
                </NavDropdown>
            <NavDropdown title="Sorting" id="sorting-dropdown">
                <NavDropdown.Item>
                    <FontAwesomeIcon className={classes.IconClass} icon={faSort} inverse spin />
                    <NavLink to="/sorting/bubble" activeClassName={classes.MyActive}>Bubble Sort</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <FontAwesomeIcon className={classes.IconClass} icon={faSort} color="green" />
                    <NavLink to="/sorting/selection" activeClassName={classes.MyActive}>Selection Sort</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <FontAwesomeIcon className={classes.IconClass} icon={faCar} color="yellow" />
                    Insertion
                </NavDropdown.Item>
                <NavDropdown.Item>
                    Merge
                </NavDropdown.Item>
                <NavDropdown.Item>
                    Quick
                </NavDropdown.Item>
                <NavDropdown.Item>
                    Radix
                </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Data Structures" id="structs-dropdown">
                <NavDropdown.Item>
                    Single Linked
                </NavDropdown.Item>
                <NavDropdown.Item>
                    Double Linked
                </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Profiles" id="profiles-dropdown">
                <NavDropdown.Item>
                <NavLink to="/profile/mo" activeClassName={classes.MyActive}>Mo</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                <NavLink to="/profile/mo" activeClassName={classes.MyActive}>Vlad</NavLink>
                </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item  className={classes.Navlink}>
                <NavLink to="/about" activeClassName={classes.MyActive}>About</NavLink>
            </Nav.Item>
            <Nav.Item className={classes.Navlink}>
                <span className={classes.Version}>Version : {version}</span>
            </Nav.Item>
        </Nav>
    );
}

export default MainMenu;