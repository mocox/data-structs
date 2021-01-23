import gsap from 'gsap';
import React, { Fragment, RefObject, useEffect, useState } from 'react';
import { FormGroup } from 'react-bootstrap';

import classes from './searchanimation.module.css';

const SearchAnimation = () => {
    const [elements, setElements] = useState<Number[]>([10,4,8,2,6]);

    const block:RefObject<HTMLDivElement> = React.createRef();
    const items:RefObject<HTMLDivElement>[] = [];
    const inputRef: RefObject<HTMLInputElement> = React.createRef();

    useEffect(()=>{
        
        gsap.from('.arrayItem', { y: -800, duration: 1, ease: 'bounce', opacity:0, stagger: 0.1 });

    },[]);

    useEffect(() => {

        // id of last element
        const id: string = '#item_' + (elements.length - 1);
        
        gsap.fromTo(id, { x: -400, duration: 0.1, opacity:0 }, { x: 0, duration: 1, delay:1, opacity:1 });        

    },[elements]);

    const changed = (event: any) => {
        
        if (event.charCode === 13 ) {
            const values = inputRef.current?.value.split(",");
            
            var ints = values?.map((n: string) => {
                return +n;
            });

            setElements(ints ?? []);
        }
    }


    const array: string = elements.join(", ");

    const buildElements = () => {
       return elements.map((x, i)=> {       

            const heightStyle={height: +x*10 + 'px'};
            const itemId='item_' + i;
            const refEl:RefObject<HTMLDivElement> = React.createRef();
            items.push(refEl);
            return (
                    <div id={itemId} key={i} className="arrayItem">
                        <div ref={refEl} className={classes.NumberItem}>{x}</div>
                        <div className={classes.Item} style={heightStyle}></div>
                    </div>
                );
        });
    };

    let els: JSX.Element[] = buildElements();

    const blockClasses = [classes.Block, 'boxshadow-normal'].join(' ');
    return(        
        <Fragment>
            <div>Set Array =&gt; 
                 <FormGroup className="form-group d-inline-block">
                    <input ref={inputRef} id='arrayValue' className={classes.InputArray} type="text" onKeyPress={changed} defaultValue={array}/>                  
                 </FormGroup>
                 <span> (Enter values then press 'enter' key)</span> 
            </div>
            <div id="block" ref={block} className={blockClasses}>
                {els}
            </div>
        </Fragment>
    );
}

export default SearchAnimation;