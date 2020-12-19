import React, { useState } from "react";

import classes from "./InputSearch.module.css";

const Input = (props) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.searchGoogleBooks(value);
  };

  return (
    <form className={classes.FormControl} onSubmit={handleFormSubmit}>
      <input
        name="search"
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for books or authors.."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Input;
