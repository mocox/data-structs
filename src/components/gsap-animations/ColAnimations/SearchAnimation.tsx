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
        setElements([10,4,8,2,6]);

        gsap.to('.arrayItem', { rotation: 360, x: 100, duration: 1 });
        gsap.to('.arrayItem', { rotation: -360, x: 0, duration: 1 , delay:1});     

    },[]);

    useEffect(() => {

        // id of last element
        const id: string = '#item_' + (elements.length - 1);
        // animate
        gsap.fromTo(id, { y: -500, duration: 1 }, { y:0, duration: 1}); 
        gsap.to(id, { x: 200, duration: 1, delay: 1 }); 
        gsap.to(id, { x: 0, duration: 1, delay:2 }); 
       

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