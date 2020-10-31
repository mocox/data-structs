import React from 'react';

import MainMenu from '../../components/menu/MainMenu';
import classes from './menu.module.css';

const Menu = (props: any) => {
    

    return (
        <MainMenu className={classes.MenuContainer} version={props.version}/>
    );
}


export default Menu;