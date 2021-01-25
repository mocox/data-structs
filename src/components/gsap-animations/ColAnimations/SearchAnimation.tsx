import gsap from 'gsap';
import React, { Fragment, RefObject, useEffect, useState } from 'react';
import { FormGroup } from 'react-bootstrap';

import classes from './searchanimation.module.css';

const SearchAnimation = (props: any) => {
    const [elements, setElements] = useState<Number[]>([10,4,8,2,6]);

    const block:RefObject<HTMLDivElement> = React.createRef();
    const items:RefObject<HTMLDivElement>[] = [];
    const inputRef: RefObject<HTMLInputElement> = React.createRef();

    var isSearching = false;

    const resize = () => {
        if (!isSearching) {
            for (let i = 0; i < elements.length; i++) {
                gsap.to(("#item_" + i), {duration: 1, scale: 1});
            }
        }
    }

    const linearSearchElement = (num: number) => {
        if (!isSearching) {
            isSearching = true;
            for (let i = 0; i < elements.length; i++) {
                document.getElementById('item_' + i)?.setAttribute("style", "background-color: none;");
            }
            var counter = 0;
            var current = document.getElementById('item_' + counter);
            var past: HTMLElement | null;
            let intervalId = setInterval(() => {
                if(current) current.setAttribute("style", "background-color: red;");
                if(elements[counter] === elements[num]) {
                    isSearching = false;
                    clearInterval(intervalId);
                }
                if(past) past.setAttribute("style", "background-color: none;");
                past = current;
                counter = counter + 1;
                current = document.getElementById('item_' + counter);
            }, 1000);
        }
    }

    const linearSearchElementGSAP = (num: number) => {
                if (!isSearching) {
                    isSearching = true;
                    for (let i = 0; i < elements.length; i++) {
                        gsap.to(("#item_" + i), {duration: 1, scale: 1});
                    }
                    var counter = 0;
                    let intervalId = setInterval(() => {
                        gsap.to(("#item_" + counter), {duration: 1, scale: 1.35});
                        if(elements[counter] === elements[num]) {
                            isSearching = false;
                            clearInterval(intervalId);
                        }
                        gsap.to(("#item_" + (counter-1)), {duration: 1, scale: 1});
                        counter = counter + 1;
                    }, 1000);
                }
            }

    const bubleSortElements = () => {
        for(let i=0; i<elements.length;i++) {
            // for(let j=0; j<elements.length-1-i;j++) {
            //     if(elements[j] > elements[j + 1]) {
            //         let temp = elements[j + 1];
            //         document.getElementById('item_' + (j+1))?.setAttribute("style", "height:" + Number.parseInt(elements[j].toString())*10 + "px");
            //         elements[j + 1] = elements[j];
            //         document.getElementById('item_' + j)?.setAttribute("style", "height:" + Number.parseInt(temp.toString())*10 + "px");
            //         elements[j] = temp;
            //     }
            // }

            // let intr = setTimeout(() => {

            // }, 1000*(elements.length-i));
            
            let j = 0;
            let intervalId = setInterval(() => {
                for (let k = 0; k < elements.length; k++) {
                    document.getElementById('item_' + i)?.setAttribute("style", "background-color: none;");
                }
                if(elements[j] > elements[j + 1]) {
                    
                    // document.getElementById('item_' + (j+1))?.setAttribute("style", "height:" + Number.parseInt(elements[j].toString())*10 + "px;background-color:red;");
                    let temp = elements[j + 1];
                    console.log(document.getElementById('item_' + (j+1))?.getAttribute("style"));
                    elements[j + 1] = elements[j];
                    // document.getElementById('item_' + j)?.setAttribute("style", "height:" + Number.parseInt(elements[j+1].toString())*10 + "px;background-color:red;");
                    elements[j] = temp;
                    console.log(elements);
                }

                if( j<elements.length-2-i) {
                    clearInterval(intervalId);
                }
                j++;
            }, 1000);
        }   
    }

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

        gsap.from('.arrayItem', { y: -800, duration: 1, ease: 'bounce', opacity:0, stagger: 0.1 });


            for (let i = 0; i < elements.length; i++) {
                gsap.to(("#item_" + i), {duration: 1, scale: 1});
            }

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
                     <div id={itemId} key={i} className="arrayItem" onClick={() => {
                        switch(props.action) {
                            case "LinearSearch":
                                linearSearchElementGSAP(i);
                                break;
                            case "BubleSort":
                                bubleSortElements();
                                break;    
                        }
                    }}>
                         <div ref={refEl} className={classes.NumberItem}>{x}</div>
                         <div id={i.toString()} className={classes.Item} style={heightStyle}></div>
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
            <div id="block" ref={block} className={blockClasses} onClick={() => resize()}>
                {els}
            </div>
        </Fragment>
    );
}

export default SearchAnimation;