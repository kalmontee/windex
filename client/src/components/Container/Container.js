import React from 'react';
// import style from './style.css';

function Container(props) {
    return (
        <div className={`container${props.fluid ? "-fluid" : ""}`}>
            {props.children}
        </div>
    )
}

export default Container;