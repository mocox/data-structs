import gsap from 'gsap';
import React, { Fragment, RefObject, useEffect, useState } from 'react';
import { FormGroup } from 'react-bootstrap';

import classes from './BubbleSortAnimation.module.css';

const BubleSortAnimation = (props: any) => {
    const [elements, setElements] = useState<Number[]>([10,4,8,2,6]);

    const block:RefObject<HTMLDivElement> = React.createRef();
    const items:RefObject<HTMLDivElement>[] = [];
    const inputRef: RefObject<HTMLInputElement> = React.createRef();    

    let elByClass = document.getElementsByClassName('arrayItem');

    const BubbleSort = () => {        
        
        let index = 0;
        while (index < elements.length-1) {            
            elByClass = document.getElementsByClassName('arrayItem');
            //get current element
            const [currentElement, value] = getNextElement(0);

            for (let j = 1; j < els.length; j ++) {                
                
                // next
                const [nextElement, nextValue] = getNextElement(j);
                                
                console.log('currentvalue - nextValue -> ', value, nextValue);

                if (value > nextValue) {
                    Swap(currentElement, nextElement, j);
                }
            }

            //index = elements.length;
             index ++;
        }        
    }

    const Swap = (a: Element, b: Element, currentIndex: number) => {

        console.log('swapping -> index ->', currentIndex, b);
        
        gsap.to(a, {x: 35*currentIndex, duration: 1});
        gsap.to(b, {x:-35, duration: 1});
    
    }
    
    const getNextElement = (index: number): [Element, number] => {
        //
        const element = elByClass[index];
        const elIndex = element.id.split('_')[1];
        const nextNumElement = document.getElementById('num_' + elIndex);
        const nextValue: number = Number.parseInt(nextNumElement?.innerHTML ?? '0');

        return [element, nextValue];
    }

    useEffect(()=>{
        
        gsap.from('.arrayItem', { y: -800, duration: 1, ease: 'bounce', opacity:0, stagger: 0.1 });

    },[]);

    // useEffect(() => {

    //     // id of last element

    //     const itemId: string = '#item_' + (elements.length - 1);
    //     const id: string = '#block_' +  (3);
    //     gsap.fromTo(itemId, { x: -400, duration: 0.1, opacity:0 }, { x: 0, duration: 1, delay:1, opacity:1 }); 
    //     //gsap.to(id,{ height: '100px', duration: 5, delay: 0.1});   

    // },[elements]);

    const changed = (event: any) => {
        
        if (event.charCode === 13 ) {
            const values = inputRef.current?.value.split(",");
            
            var ints = values?.map((n: string) => {
                return +n;
            });

            setElements(ints ?? []);

            //gsap.from('.arrayItem', { y: -800, duration: 1, ease: 'bounce', opacity:0, stagger: 0.1 });

            BubbleSort();

        }
        
    }

    

    const array: string = elements.join(", ");

    const buildElements = () => {
        return elements.map((x, i)=> {       
 
             const heightStyle={height: +x*10 + 'px'};
             const itemId='item_' + i;
             const numId = 'num_' + i;
             const blockId='block_' + i;
             const refEl:RefObject<HTMLDivElement> = React.createRef();
             items.push(refEl);
             return (
                     <div id={itemId} key={i} className="arrayItem">
                         <div id={numId} ref={refEl} className={classes.NumberItem}>{x}</div>
                         <div id={blockId} className={classes.Item} style={heightStyle}></div>
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

export default BubleSortAnimation;