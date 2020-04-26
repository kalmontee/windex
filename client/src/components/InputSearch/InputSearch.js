import React from 'react';
import classes from './InputSearch.module.css'

const Input = (props) => {
  return (
    <div className={classes.FormControl}>
      <input
        className={classes.SearchBox}
        onChange={props.handleInputChange}
        value={props.value}
        placeholder="Book Title"
        name="search"
        type="text"
      />
      <button className={classes.SearchButton} type="submit" onClick={() => props.searchBooksHandler()}>
        Search
      </button>
    </div>
  )
}

export default Input;