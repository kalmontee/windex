import React from 'react';
import API from '../../utils/API'

function SaveBook(props) {
   return (
      <div>
         <button className="save-bookBtn" onClick={() => props.saveBookBtnHandler()}>
            Save Book
         </button>
      </div>
   )
}

export default SaveBook;