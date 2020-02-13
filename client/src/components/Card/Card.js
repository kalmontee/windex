import React from 'react';

function Card(props) {
    const size = props.size.split(" ").map(size => "col-" + size).join(" ");

    return (
        <div className={size}>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Card;