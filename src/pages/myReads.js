import React, { useState, useEffect } from "react";
import Shelf from "../components/cmpntShelf";

const pgMyReads = ({ booksOnShelves ,onUpdateShelf }) => {
  const [shelf, setShelf] = useState();

  useEffect( () => {  
        setShelf([
          {
            id: "currentlyReading",
            title: "Currently Reading",
            shelfBooks: booksOnShelves.filter(
              (book) => book.shelf === "currentlyReading"
            ),
          },
          {
            id: "wantToRead",
            title: "Want to read",
            shelfBooks: booksOnShelves.filter((book) => book.shelf === "wantToRead"),
          },
          {
            id: "read",
            title: "Read",
            shelfBooks: booksOnShelves.filter((book) => book.shelf === "read"),
          },
        ]);
  }, [booksOnShelves]);
  //console.log(shelf);
  return typeof shelf === "undefined" || shelf.length === 0 ? (
    <div>
      <h2>Error Laoding Shelves</h2>
    </div>
  ) : (
    <div>
      <div style={{ height: 70 }}></div>
      {shelf.map((res) => (
            <Shelf key={res.id} shelf={res} onUpdateShelf={onUpdateShelf}/>
          ))}
    </div>
  );
};

export default pgMyReads;
