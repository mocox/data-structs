import React from "react";

const Scroll = (props: { children: React.ReactNode; }) => {
    return (
        <div style={{height: '40em', overflow: 'scroll' }}>
            {props.children}
        </div>
    );
};

export default Scroll;