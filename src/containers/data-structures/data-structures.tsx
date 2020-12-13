import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import SingleLL from '../../components/data-structures/singleLL';
import DoubleLL from '../../components/data-structures/doubleLL';


const DataStructures = () => {

    let { which } = useParams<{which: string}>();
   
    const getWhich = (w: string) => {
        
        switch(w) {
            case "singleLL":
                return <SingleLL/>
            case "doubleLL":
                return <DoubleLL/>
        }
    }
    
    return (
        <Fragment>
            {/* <p>Which Data Structure: <em>{which}</em></p> */}
            {getWhich(which)}
        </Fragment>
    );
}

export default DataStructures;