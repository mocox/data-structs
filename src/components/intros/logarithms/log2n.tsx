import React, { Fragment } from 'react';
import { Jumbotron } from 'react-bootstrap';

import classes from './log2n.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Log2n = (props: any) => {

        return(
            <Fragment>
                <Jumbotron fluid className="pageTron">
                    <h1>Log<sub>2</sub> N</h1>
                    <p>
                        Log<sub>2</sub> N - What does it mean and how to convert it.
                    </p>
                    <p>
                        <strong>We are still under construction so please be patient.</strong>
                    </p>
                </Jumbotron>
                <h2>The Logarithm Log<sub>2</sub> N</h2>
                <div className={classes.Container}>
                    <div className="subHeader">
                        <FontAwesomeIcon className="iconClass" icon={faBook} color="turquoise" />
                        Introduction
                    </div>
                    <p>
                        Log<sub>2</sub> N
                    </p>
                </div>
            </Fragment>
        );
}

export default Log2n;