import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Binary from '../../components/searches/binary/binary-search';
import Linear from '../../components/searches/linear/linear-search';


const Searches = (props: any) => {
    
    const [whichOne, setWhichOne] = useState('binary');
    let { which } = useParams<{which: string}>();

    setWhichOne(which);
    
    
    // let { which } = useParams<{which: string}>();
    
    const getWhich = (w: string) => {
        console.log('which -> ', which);

        switch(w) {
            case "linear":
                return <Linear />
            case "binary":
                return <Binary />
        }
    }

    return (
        <React.Fragment>
            <p>Which Search: {whichOne}</p>
            {getWhich(whichOne)}
        </React.Fragment>
    );
}

export default Searches;