import React, { useState } from "react";
import Form from "react-bootstrap/Form";


const bookMenu=({bookInfo, onUpdateShelf}) =>{

    const [shelf, setShelf]=useState(bookInfo.hasOwnProperty("shelf") ? bookInfo.shelf : undefined);

    const changeShelf=(newShelf)=>{
      
        onUpdateShelf(bookInfo,newShelf);
        setShelf(newShelf);
    }
    return (
        <div className="book-shelf-changer">
              <Form.Select size="sm" aria-label="Default" style={{backgroundColor:"lightgray"}} onChange={(e)=>{changeShelf(e.target.value)}}> 
                <option value="0" disabled>
                  Move to...
                </option>
                <option value="none" selected={shelf==="none"||shelf===undefined}>None</option>
                <option value="currentlyReading" selected={shelf==="currentlyReading"}>Currently Reading</option>
                <option value="wantToRead" selected={shelf==="wantToRead"}>Want To Read</option>
                <option value="read" selected={shelf==="read"}>Read</option>           
              </Form.Select>
            </div>
    );
}

export default bookMenu;