import React, { useEffect, useState } from "react";
import Shelf from "../components/cmpntShelf";
import * as Api from "../BooksAPI";

function setShelfToBook(booksArray = [], toCompare = []) {
  if (booksArray.length > 0 && toCompare.length > 0) {
    booksArray.forEach((e, i) => {
      for (let ex = 0; ex < toCompare.length; ex++) {
        if (e.id === toCompare[ex].id) {
          booksArray[i] = toCompare[ex];
          break;
        }
      }
    });
  }
  return booksArray;
}

const pgSearch = ({ booksOnShelves ,onUpdateShelf}) => {
  const [strQuery, setStrQuery] = useState("");
  const [shelf, setShelf] = useState({ id: "", title: "", shelfBooks: [] });

  const searchQueryChanged = (newQuery) => {
    const query = newQuery.target.value === null ? "" : newQuery.target.value;
    setStrQuery(query.toLowerCase().trim());
  };
  useEffect(async () => {
    await Api.search(strQuery, 100).then((res) => {
      setShelf({
        id: "search",
        title: null,
        shelfBooks: setShelfToBook(res, booksOnShelves),
      });
    });
  }, [strQuery]);

  return (
    <section>
      <div className="search-books-bar">
        <div className="search">Search</div>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Type here to search by title, author, or ISBN"
            onChange={searchQueryChanged}
          />
        </div>
      </div>
      <div style={{ height: 90 }}></div>
      <Shelf key={shelf.id} shelf={shelf} style={{ margin: "5rem" }}  onUpdateShelf={onUpdateShelf}/>
    </section>
  );
};

export default pgSearch;
