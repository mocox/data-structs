import React from 'react';
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';

import classes from './mainmenu.module.css';

const MainMenu = (props: any) => {
    const version: string = props.version;

    return (
        <Navbar collapseOnSelect expand="lg" className={classes.menu}>
            <Navbar.Brand href="/home">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="Intros" id="intros-dropdown">
                    <NavDropdown.Item href="/intros/big-o">Big O</NavDropdown.Item>
                    <NavDropdown.Item href="/intros/logarithms">Log<sub>2</sub>N</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Searches" id="searches-dropdown">
                    <NavDropdown.Item href="/searches/linear">Linear Search</NavDropdown.Item>
                    <NavDropdown.Item href="/searches/binary">Binary Search</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Sorting" id="sorting-dropdown">
                    <NavDropdown.Item href="/sorting/bubble">Bubble Sort</NavDropdown.Item>
                    <NavDropdown.Item href="/sorting/selection">Selection Sort</NavDropdown.Item>
                    <NavDropdown.Item href="/sorting/insertion">Insertion Sort</NavDropdown.Item>
                    <NavDropdown.Item href="/sorting/merge">Merge Sort</NavDropdown.Item>
                    <NavDropdown.Item href="/sorting/quick">Quick Sort</NavDropdown.Item>
                    <NavDropdown.Item href="/sorting/radix">Radix Sort</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Data Structures" id="structs-dropdown">
                    <NavDropdown.Item href="/data-structures/singleLL">Single Linked List</NavDropdown.Item>
                    <NavDropdown.Item href="/data-structures/doubleLL">Double Linked List</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                <Nav>
                    <span className={classes.Version}>Version : {version}</span>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MainMenu;