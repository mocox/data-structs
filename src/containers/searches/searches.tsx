import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Binary from '../../components/searches/binary/binary';
import Linear from '../../components/searches/linear/linear';


const Searches = (props: any) => {
    
    const [whichOne, setWhich] = useState('');
    let { which } = useParams<{which: string}>();

    useEffect(() => {
        setWhich(which);
    }, [which]);
    
    console.log('which -> ', which);
    // let { which } = useParams<{which: string}>();
    
    const getWhich = (w: string) => {
        
        switch(w) {
            case "linear":
                return <Linear />
            case "binary":
                return <Binary />
        }
    }

    return (
        <Fragment>
            <p>Which Search: {which}</p>
            {getWhich(whichOne)}
        </Fragment>
    );
}

export default Searches;