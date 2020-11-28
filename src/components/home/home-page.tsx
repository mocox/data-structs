import React, { Fragment } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { NavLink } from 'react-router-dom';

import classes from './home.module.css';

const urlName = "learnthis.rocks";

const HomePage = () => {

    return (

        <Fragment>
            <Jumbotron fluid className={classes.HeaderTron}>
                <h1>Welcome to <span className="url-name">{urlName}</span> Data Structures</h1>
                <p>
                    A website created by <NavLink to="/profile/mo">Mo Cox</NavLink> and <em>Vlad Chelyadin</em>.
                    A cooperation between London, UK and Saint Petersburg, Russia.
                </p>
                <p>
                    <strong>We are still under construction so please be patient.</strong>
                </p>
            </Jumbotron>
            
            <div className="container">
                <h2>Data Structures</h2>
                <p>
                    This is a site for those who want to learn more about data structures in regard to data science.
                    Everything is free, so enjoy!!!
                </p>
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