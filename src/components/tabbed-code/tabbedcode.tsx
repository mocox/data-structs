import React, { Fragment } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import TabContent from './tab-content/tabContent';

import classes from './tabbed-code.module.css';

const linear = "## Linearly search for a number in an array\n"+
"## Big O\n"+
"## Best Average Worst\n"+
"## O(1)  O(n)   O(n)\n\n"+

"def linear_search(arr, val):\n"+
"    for num in arr:\n"+
"        if num == val:\n"+
"            return arr.index(num)\n"+    
"    return -1\n\n\n"+


"index = linear_search([1,2,3,10,104,8,99, 16, 44], 16)\n"+
"print(\"index is :-> \", index)";

const TabbedCode = (props: any) => {
    return (
        <Fragment>
            {/* <h5>Tabbed Code Component - {props.message}</h5> */}
            <div className={classes.TabContainer}>
                <Tabs defaultActiveKey="c#" id="code-holder">
                    <Tab eventKey='c#' title='C#'>
                        <TabContent code="public void Get(string str)  { }" />
                    </Tab>
                    <Tab eventKey='python' title="Python">
                        <TabContent code={linear} />
                    </Tab>
                    <Tab eventKey="javascript" title="JavaScript" >
                        <TabContent code="public static void SetSmth() => {} ;" />
                    </Tab>
                </Tabs>
            </div>
        </Fragment>
    )
}

export default TabbedCode;