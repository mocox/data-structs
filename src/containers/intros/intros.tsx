import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import BigOExp from '../../components/intros/big-o/bigo-exp';
import Log2n from '../../components/intros/logarithms/log2n';

const Intros = () => {
    let {which} = useParams<{which: string}>();

    const getWhich = (w: string) => {
        switch(w) {
            case "big-o":
                return <BigOExp/>
            case "logarithms":
                return <Log2n/>    
        }
    };

    return(
        <Fragment>
            {getWhich(which)}
        </Fragment>       
    );
}

export default Intros;