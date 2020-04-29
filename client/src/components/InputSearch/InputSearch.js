import React from 'react';
import classes from './InputSearch.module.css'

const Input = (props) => {
  return (
    <form className={classes.FormControl} onSubmit={props.formSubmit}>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        placeholder="Search for book titles or authors.."
        name="search"
        type="text"
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default Input;