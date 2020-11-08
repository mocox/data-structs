import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom';
import BinarySearch from '../../components/searches/binary/binary-search';
import LinearSearch from '../../components/searches/linear/linear-search';
import About from '../about/about';
import Home from '../home/home';


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
            <div className="row">
                <div className="col-6">
                    <p>Which Search: <em>{which}</em></p>
                    {getWhich(which)}
                </div>
                <div className="col-4">
                    <About />
                    <Home />
                </div>
            </div>
        </Fragment>
    );
}

export default Searches;