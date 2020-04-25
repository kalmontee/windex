import React from "react";
import "./style.css";

// The Thumbnail component renders a div that uses some CSS to render a background image
function Thumbnail({ src }) {
   return (
      <div
         className="thumbnail"
         role="img"
         aria-label="Recipe Image"
         style={{ backgroundImage: `url(${src})` }}
      />
   );
}

export default Thumbnail;