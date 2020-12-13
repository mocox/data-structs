import React, { Fragment } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import TabContent from './tab-content/tabContent';

import classes from './tabbed-code.module.css';

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
                        <TabContent code='public void Get2(string str)  { }' />
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