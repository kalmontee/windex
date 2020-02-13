import React from 'react';

function BookDetails(props) {
    return (
        <div className="text-center">
            <img
                alt={props.title}
                className="img-fluid"
                src={props.thumbnail}
            />
            <h2> {props.title} </h2>
            <h4> {props.author} </h4>
            <p> {props.description} </p>
            <a> {props.link} </a>
        </div>
    )
}

export default BookDetails;