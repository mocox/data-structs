import React, { Fragment } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { NavLink } from 'react-router-dom';

import classes from './home.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faGlobe } from '@fortawesome/free-solid-svg-icons';

const urlName = "learnthis.rocks";

const HomePage = () => {

    return (

        <Fragment>
            <Jumbotron fluid className={classes.HeaderTron}>
                <div className={classes.HeaderContainer}>
                    <h1>Welcome to <span className="url-name">{urlName}</span> Data Structures</h1>
                    <p>
                        A website created by <NavLink to="/profile/mo">Mo Cox</NavLink> and <em>Vlad Chelyadin</em>.
                        A cooperation between London, UK and Saint Petersburg, Russia.
                    </p>
                    <p>
                        <strong>We are still under construction so please be patient.</strong>
                    </p>
                </div>
            </Jumbotron>
            
            <div className={classes.Container}>
                <h2>Algoritms and Data Structures in Computing</h2>
                <div className="subHeader">
                    <FontAwesomeIcon className="iconClass" icon={faBook} color="turquoise" />
                    Introduction
                </div>
                <p>
                    This is a site for those who want to learn more about data structures in regard to data science.
                    It is an open source project and can be found on github. It is written and designed by Mo and Vlad.
                    Mo is from London and is a developer with over 20 years experience and Vlad is a student engineer in St Petersburg, Russia
                </p>
                <p>
                Everything is free, so enjoy!!!
                </p>
                <div className={classes.SubHeader}>
                    <FontAwesomeIcon className="iconClass" icon={faGlobe} color="turquoise" />
                    Overview</div>
                <p>
                    The site will try to explain the following
                    <ul>
                        <li>
                            Big-O notation, what it is and how to interpret it from code.
                        </li>
                        <li>
                            Logarithms by example and try to simplify a way of working with them and get you up to date with Log<sub>2</sub>N
                        </li>
                        <li>
                            Code examples using C#, python, javascript and more ...
                        </li>
                        <li>We will be using some visualisation too from other useful sites.</li>
                    </ul>                     
                </p>  
                <p>
                    If you wish to contribute then get in touch via the <a href="https://github.com/mocox/data-structs">github page.</a> 
                </p>              
            </div>            
        </Fragment>
    );
}

export default HomePage;