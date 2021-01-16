import React from 'react';
import { NavLink } from 'react-router-dom';

import { Nav, Navbar, NavDropdown} from 'react-bootstrap';

import classes from './mainmenu.module.css';

import About from '../about/about';

const MainMenu = (props: any) => {
    const version: string = props.version;
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Navbar collapseOnSelect expand="lg" className={classes.menu}>
            <Navbar.Brand href="/home">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="Intros" id="intros-dropdown" className={classes.DropdownContainer}>
                    <NavDropdown.Item as={NavLink} to="/intros/big-o">Big O</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/intros/logarithms">Log<sub>2</sub>N</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Searches" id="searches-dropdown">
                    <NavDropdown.Item as={NavLink} to="/searches/linear">Linear Search</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/searches/binary">Binary Search</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Sorting" id="sorting-dropdown">
                    <NavDropdown.Item as={NavLink} to="/sorting/bubble">Bubble Sort</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/sorting/selection">Selection Sort</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/sorting/insertion">Insertion Sort</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/sorting/merge">Merge Sort</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/sorting/quick">Quick Sort</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/sorting/radix">Radix Sort</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Data Structures" id="structs-dropdown">
                    <NavDropdown.Item as={NavLink} to="/data-structures/singleLL">Single Linked List</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/data-structures/doubleLL">Double Linked List</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
                <Nav.Link onClick={() => setModalShow(true)}>About</Nav.Link>
                </Nav>
                <Nav>
                    <span className={classes.Version}>Version : {version}</span>
                </Nav>
            </Navbar.Collapse>

            <About
                show={modalShow}
                version={version}
                onHide={() => setModalShow(false)}
            />

        </Navbar>
        
    );
}

export default MainMenu;