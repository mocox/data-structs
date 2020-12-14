import React, { Fragment } from 'react';
import {Jumbotron} from 'react-bootstrap';
import TabbedCode from '../tabbed-code/tabbedcode';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCode } from '@fortawesome/free-solid-svg-icons';

import classes from './sorting.module.css';

const SelectionSort = () => {


    return (
        <Fragment>     
            <Jumbotron fluid className="pageTron">
                <h1>Selection Sort</h1>
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
                    <FontAwesomeIcon className="iconClass" icon={faCode} color="turquoise" />
                    Code Examples
                </div>
                <TabbedCode message="Linear code" />
            </div>   
            
        </Fragment>

    );
}

export default SelectionSort;