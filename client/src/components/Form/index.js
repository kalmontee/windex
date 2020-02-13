import React from 'react';
import style from './style.css'

export function Input(props) {
    return (
        <div>
            <div className="form-control">
                <input 
                className="search-box"
                onChange={props.handleInputChange}
                value={props.value}
                placeholder="Book Title"
                name="search"
                type="text"
                />
                <button className="search-button " onClick={() => props.searchBooksHandler()}>
                    Search
                </button>
            </div>
        </div>
    )
}