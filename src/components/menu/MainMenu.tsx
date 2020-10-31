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
                <li>Algorithms
                    <div className={classes.SubMenu}>                    
                        <ul>
                            <li>One</li>
                            <li>Two</li>
                            <li>Three</li>
                        </ul>
                    </div>
                </li>
                <li>Data Structures
                    <div className={classes.SubMenu}>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <NavLink to="/about" activeClassName={classes.MyActive}>About</NavLink>
                </li>

                <li>{version}</li>
            </ul>
        </nav>
    );
}

export default MainMenu;