import React, { Fragment } from 'react';
import { Jumbotron } from 'react-bootstrap';
import BigoImg from '../../images/big-o.png';

import classes from './bigo.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const BigOExp = (props: any) => {

        return(
            <Fragment>
                <Jumbotron fluid className="pageTron">
                    <h1>Big O Notation</h1>
                    <p>
                        Big O notation is a way to describe time and space complexity of routines.
                    </p>
                    <p>
                        <strong>We are still under construction so please be patient.</strong>
                    </p>
                </Jumbotron>
                <h2>Big O Notation - Space and Time Complexity</h2>
                <div className={classes.Container}>
                    <div className="subHeader">
                        <FontAwesomeIcon className="iconClass" icon={faBook} color="turquoise" />
                        Introduction
                    </div>
                    <p>
                        Big O notation helps us to determine time and space complexity for a given routine.
                        What do we mean by time and space complexity? Time complexity really is just how much time a
                        given algoritm or data structure takes to complete and space complexity is how much memory
                        do we use when carrying out such a routine.
                    </p>
                    <p>
                        Examples
                    </p>

                    <div className={classes.BigoImgContainer}>
                    <img src={BigoImg} alt="Big-O graph" /> 
                    
                    </div>
                    <p>
                        Explanatin of graph!
                    </p> 
                </div>
            </Fragment>
        );
}

export default BigOExp;