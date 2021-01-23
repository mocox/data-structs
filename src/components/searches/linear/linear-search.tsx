import React, { Fragment } from 'react';
import TabbedCode from '../../tabbed-code/tabbedcode';
import { Jumbotron } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCode, faGlasses } from '@fortawesome/free-solid-svg-icons';

import classes from '../linear.module.css';
import SearchAnimation from '../../gsap-animations/ColAnimations/SearchAnimation';

const LinearSearch = () => {
    return (
        <Fragment>
            <Jumbotron fluid className="pageTron">
                <h1>Linear Searches</h1>
                <p>Description here!</p>
                <p>
                    <strong>We are still under construction so please be patient.</strong>
                </p>
            </Jumbotron>            
            <h2>Linear Searches</h2>
            <div className={classes.Container}>
                <div className="subHeader">
                    <FontAwesomeIcon className="iconClass" icon={faBook} color="turquoise" />
                    Introduction
                </div>
                <p>Text here</p>
                <div className="subHeader">
                    <FontAwesomeIcon className="iconClass" icon={faGlasses} color="turquoise" />
                    Visualisations                   
                </div>
                <SearchAnimation />
                <div className="subHeader">
                    <FontAwesomeIcon className="iconClass" icon={faCode} color="turquoise" />
                    Code Examples
                </div>                
                <TabbedCode message="Linear code" />
            </div>
            
        </Fragment>
    );
}

export default LinearSearch;