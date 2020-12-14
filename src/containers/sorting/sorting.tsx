import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import BubbleSort from '../../components/sorting/bubble-sort';
import SelectionSort from '../../components/sorting/selection-sort';
import InsertionSort from '../../components/sorting/insertion-sort';
import MergeSort from '../../components/sorting/merge-sort';
import QuickSort from '../../components/sorting/quick-sort';
import RadixSort from '../../components/sorting/radix-sort';

const Sorting = () => {

    let { which } = useParams<{which: string}>();
   
    const getWhich = (w: string) => {
        
        switch(w) {
            case "bubble":
                return <BubbleSort />
            case "selection":
                return <SelectionSort/>
            case "insertion":
                return <InsertionSort/>
            case "merge":
                return <MergeSort/>
            case "quick":
                return <QuickSort/>
            case "radix":
                return <RadixSort/>
        }
    }
    
    return (
        <Fragment>
            {/* <p>Which Sorting: <em>{which}</em></p> */}
            {getWhich(which)}
        </Fragment>
    );
}

export default Sorting;