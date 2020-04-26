import React from "react";
import classes from "./Thumbnails.module.css";

// The Thumbnail component renders a div that uses some CSS to render a background image
const Thumbnail = (props) => {
   return (
      <div className={classes.Thumbnail}>
         <img
            className={classes.Thumbnail}
            role="img"
            aria-label="Recipe Image"
            src={props.src}
         />
      </div>
   );
}

export default Thumbnail;