import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom';
import BinarySearch from '../../components/searches/binary/binary-search';
import LinearSearch from '../../components/searches/linear/linear-search';


const Searches = () => {
    
    let { which } = useParams<{which: string}>();
   
    const getWhich = (w: string) => {
        
        switch(w) {
            case "linear":
                return <LinearSearch />
            case "binary":
                return <BinarySearch />
        }
    }

    return (
        <Fragment>
            <p>Which Search: {which}</p>
            {getWhich(which)}
        </Fragment>
    );
}

export default Searches;