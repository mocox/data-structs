import React, { Fragment } from 'react';
import { Jumbotron } from 'react-bootstrap';
import BigoImg from '../../images/big-o.png';

import classes from './bigo.module.css';

const BigOExp = (props: any) => {

        return(
            <Fragment>
                <Jumbotron fluid className="pageTron">
                    <h1>Big O Notation</h1>
                    <p>
                        Description
                    </p>
                    <p>
                        <strong>We are still under construction so please be patient.</strong>
                    </p>
                </Jumbotron>
                <h2>Big-o Explanation</h2>
                <p>
                    Some explanation of Big-o here.
                </p>

                <div className={classes.BigoImgContainer}>
                   <img src={BigoImg} alt="Big-O graph" /> 
                   
                </div>
                <p>
                        Explanatin of graph!
                    </p> 
                
            </Fragment>
        );
}

export default BigOExp;