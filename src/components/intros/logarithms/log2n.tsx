import React, { Fragment } from 'react';
import { Jumbotron } from 'react-bootstrap';

import classes from './log2n.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Log2n = (props: any) => {

        return(
            <Fragment>
                <Jumbotron fluid className="pageTron">
                    <h1>Log2n</h1>
                    <p>
                        Log2n
                    </p>
                    <p>
                        <strong>We are still under construction so please be patient.</strong>
                    </p>
                </Jumbotron>
                <h2>Log2n</h2>
                <div className={classes.Container}>
                    <div className="subHeader">
                        <FontAwesomeIcon className="iconClass" icon={faBook} color="turquoise" />
                        Introduction
                    </div>
                    <p>
                        Log2n
                    </p>
                </div>
            </Fragment>
        );
}

export default Log2n;