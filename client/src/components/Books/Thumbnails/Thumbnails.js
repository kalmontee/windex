import React from "react";
import classes from "./Thumbnails.module.css";

// The Thumbnail component renders a div that uses some CSS to render a background image
function Thumbnail({ src }) {
   return (
      <div
         className={classes.Thumbnail}
         role="img"
         aria-label="Recipe Image"
         style={{ backgroundImage: `url(${src})` }}
      />
   );
}

export default Thumbnail;