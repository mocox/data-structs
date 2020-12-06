import React from 'react';

import classes from './tabContent.module.css';

export interface ContentProps {
    code: string;
}

const TabContent = (props: ContentProps) => {
    return (
        <div className={classes.Content}>
            <pre>
                <code className="lang-csharp" data-author-content={props.code}>{props.code}</code>
            </pre>
        </div>
    )
}

export default TabContent;