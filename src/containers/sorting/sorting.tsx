import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import BubbleSort from '../../components/sorting/bubble-sort';

const Sorting = () => {

    let { which } = useParams<{which: string}>();
   
    const getWhich = (w: string) => {
        
        switch(w) {
            case "bubble":
                return <BubbleSort />
            case "selection":
                return <h1>Selection</h1>
        }
    }
    
    return (
        <Fragment>
            <p>Which Sorting: <em>{which}</em></p>
            {getWhich(which)}
        </Fragment>
    );
}

export default Sorting;