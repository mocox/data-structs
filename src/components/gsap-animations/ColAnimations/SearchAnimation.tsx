import gsap from 'gsap';
import React, { Fragment, RefObject, useEffect, useState } from 'react';
import { FormGroup } from 'react-bootstrap';

import classes from './searchanimation.module.css';

const SearchAnimation = () => {
    const [elements, setElements] = useState<Number[]>([]);

    const block:RefObject<HTMLDivElement> = React.createRef();
    const items:RefObject<HTMLDivElement>[] = [];
    const inputRef: RefObject<HTMLInputElement> = React.createRef();

    useEffect(()=>{
        setElements([10,4,3,8,2]);
    },[]);

    useEffect(() => {

        // gsap.timeline('#block', )
        gsap.to('.Item', {rotation: 360, x: 100, duration: 2, })        

    },[elements]);

    const changed = (event: any) => {
        const values = inputRef.current?.value.split(",");
        
        var ints = values?.map((n: string) => {
            return +n;
        });

        setElements(ints ?? []);
             
    }

        const array: string = elements.join(", ");
    console.log('array - ', array);

    const buildElements = () => {
       return elements.map((x, i)=> {       

            const heightStyle={height: +x*10 + 'px'};
            const itemId='item_' + i;
            const refEl:RefObject<HTMLDivElement> = React.createRef();
            items.push(refEl);
            return (
                    <div key={i}>
                        <div ref={refEl} id={itemId} className={classes.NumberItem}>{x}</div>
                        <div className={classes.Item} style={heightStyle}></div>
                    </div>
                );
        });
    };

    let els: JSX.Element[] = buildElements();

    const blockClasses = [classes.Block, 'boxshadow-normal'].join(' ');
    return(        
        <Fragment>
            <div>Array is : 
                 <FormGroup className="form-group d-inline-block" >
                    <input ref={inputRef} id='arrayValue' className="Name" type="text" onKeyPress={changed} defaultValue={array}/> 
                    <button className="btn btn-default" onClick={changed} />                   
                 </FormGroup> 
                </div>
            <div id="block" ref={block} className={blockClasses}>
                {els}
            </div>
        </Fragment>
    );
}

export default SearchAnimation;