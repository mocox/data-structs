import React from 'react';
import { Nav, Navbar, NavDropdown, Button} from 'react-bootstrap';

import classes from './mainmenu.module.css';

import {NavLink} from 'react-router-dom'


const MainMenu = (props: any) => {
    const version: string = props.version;

    return (
        <Navbar collapseOnSelect expand="lg" className={classes.menu}>
            <Navbar.Brand href="/home">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="Intros" id="intros-dropdown">
                    <NavDropdown.Item className={classes.navDropdownItem}>
                        <NavLink to ="/big-o">
                            <Button className={classes.button}>
                                Big O
                            </Button>
                        </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item className={classes.navDropdownItem}>
                        <NavLink to ="/Logarithms">
                            <Button className={classes.button}>
                                Log<sub>2</sub>N
                            </Button>
                        </NavLink>
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Searches" id="searches-dropdown">
                    <NavDropdown.Item className={classes.navDropdownItem}>
                        <NavLink to ="/searches/linear">
                            <Button className={classes.button}>
                                Linear Search
                            </Button>
                        </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item className={classes.navDropdownItem}>
                        <NavLink to ="/searches/binary">
                            <Button className={classes.button}>
                                Binary Search
                            </Button>
                        </NavLink>
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Sorting" id="sorting-dropdown">
                    <NavDropdown.Item className={classes.navDropdownItem}>
                        <NavLink to ="/sorting/bubble">
                            <Button className={classes.button}>
                                Bubble Sort
                            </Button>
                        </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item className={classes.navDropdownItem}>
                        <NavLink to ="/sorting/selection">
                            <Button className={classes.button}>
                                Selection Sort
                            </Button>
                        </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item className={classes.navDropdownItem}>
                        <NavLink to ="/sorting/insertion">
                            <Button className={classes.button}>
                                Insertion Sort
                            </Button>
                        </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item className={classes.navDropdownItem}>
                        <NavLink to ="/sorting/merge">
                            <Button className={classes.button}>
                                Merge Sort
                            </Button>
                        </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item className={classes.navDropdownItem}>
                        <NavLink to ="/sorting/quick">
                            <Button className={classes.button}>
                                Quick Sort
                            </Button>
                        </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item className={classes.navDropdownItem}>
                        <NavLink to ="/sorting/radix">
                            <Button className={classes.button}>
                                Radix Sort
                            </Button>
                        </NavLink>
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Data Structures" id="structs-dropdown">
                    <NavDropdown.Item className={classes.navDropdownItem}>
                        <NavLink to ="/data-structures/singleLL">
                            <Button className={classes.button}>
                                Single Linked List
                            </Button>
                        </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item className={classes.navDropdownItem}>
                        <NavLink to ="/data-structures/doubleLL">
                            <Button className={classes.button}>
                                Double Linked List
                            </Button>
                        </NavLink>
                    </NavDropdown.Item>
                </NavDropdown>
                    <NavLink to="/profile" className={classes.navLink}>
                        <Button className={classes.button}>
                            <span>Profile</span>
                        </Button>
                    </NavLink>
                    <NavLink to="/about" className={classes.navLink}>
                        <Button className={classes.button}>
                            <span>About</span>
                        </Button>
                    </NavLink>
                </Nav>
                <Nav>
                    <span className={classes.Version}>Version : {version}</span>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MainMenu;