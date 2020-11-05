import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './mainmenu.module.css';

const MainMenu = (props: any) => {
    const version: string = props.version;
    // const mainMenuClasses = [menuClasses.MainMenu, 'navbar-nav mr-auto'].join(' ');
    return (
        <nav className={classes.Container}>
            <ul className='navbar-nav mr-auto'>
                <li>
                    <NavLink to="/" activeClassName={classes.MyActive}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/big-o" activeClassName={classes.MyActive}>Big O</NavLink>
                </li>
                <li>Searches
                    <div className={classes.SubMenu}>                    
                        <ul>
                            <li>
                                <NavLink to="/searches/linear" activeClassName={classes.MyActive}>Linear Search</NavLink>
                            </li>
                            <li>
                                <NavLink to="/searches/binary" activeClassName={classes.MyActive}>Binary Search</NavLink>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>Sorting
                    <div className={classes.SubMenu}>                    
                        <ul>
                            <li>
                                <NavLink to="/sorting/bubble" activeClassName={classes.MyActive}>Bubble Sort</NavLink>
                            </li>
                            <li>
                                <NavLink to="/sorting/selection" activeClassName={classes.MyActive}>Selection Sort</NavLink>
                            </li>
                            <li>Insertion</li>
                            <li>Merge</li>
                            <li>Quick</li>
                            <li>Radix</li>
                        </ul>
                    </div>
                </li>
                <li>Data Structures
                    <div className={classes.SubMenu}>
                        <ul>
                            <li>Singly Linked List</li>
                            <li>Doubly Linked List</li>
                            <li><hr /></li>
                            <li>Stacks &amp; Queues</li>
                            <li>Search Trees</li>
                            <li>More ...</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <NavLink to="/about" activeClassName={classes.MyActive}>About</NavLink>
                </li>

                <li className={classes.Version}>Version : {version}</li>
            </ul>
        </nav>
    );
}

export default MainMenu;