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
                <p>In a linear search, each element of an array is retrieved one by one in logical order and it is checked whether this element is required or not. The search will fail if all items are available and the item you are looking for is not found. In the worst case, in the middle case, we may need to scan half the size of the array (n / 2).</p>
            </Jumbotron>            
            <h2>Linear Searches</h2>
            <div className={classes.Container}>
                <div className="subHeader">
                    <FontAwesomeIcon className="iconClass" icon={faBook} color="turquoise" />
                    Introduction
                </div>
                <p>Linear search can be defined as a method that iterates through an array sequentially to locate a given element. The program below illustrates finding an array element using search.</p>
                <p>The time taken or the number of comparisons made when searching for an entry in the lookup table determines the effectiveness of the method. If the desired record is in the first position of the lookup table, only one comparison is performed. When the desired entry is the last one, then n comparisons need to be made. If an entry should be present somewhere in the lookup table, the average number of comparisons will be (n + 1/2). The worst-case efficiency of this method is O(n) denotes the order of execution.</p>
                <div className="subHeader">
                    <FontAwesomeIcon className="iconClass" icon={faGlasses} color="turquoise" />
                    Visualisations                   
                </div>
                <SearchAnimation action="LinearSearch"/>
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