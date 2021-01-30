import React, { Fragment } from 'react';
import {Jumbotron} from 'react-bootstrap';
import TabbedCode from '../tabbed-code/tabbedcode';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCode, faGlasses } from '@fortawesome/free-solid-svg-icons';

import classes from './sorting.module.css';
import BubbleSortAnimation from '../gsap-animations/ColAnimations/BubbleSortAnimation';

const BubbleSort = () => {


    return (
        <Fragment>     
            <Jumbotron fluid className="pageTron">
                <h1>Bubble Sort</h1>
                <p>Description here!</p>
                <p>
                    <strong>We are still under construction so please be patient.</strong>
                </p>
            </Jumbotron> 
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
                <BubbleSortAnimation/>
                <div className="subHeader">
                    <FontAwesomeIcon className="iconClass" icon={faCode} color="turquoise" />
                    Code Examples
                </div>
                <TabbedCode message="Linear code" />
            </div>   
        </Fragment>

    );
}

export default BubbleSort;