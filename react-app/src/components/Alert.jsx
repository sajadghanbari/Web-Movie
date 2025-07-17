import React from 'react';

const Alert = (props) => {
    return (
        <div className={"alert " + props.className} role="alert">
            {props.children}
        </div>
    );
}

export default Alert;
