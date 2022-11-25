import React from "react";
import Card from "react-bootstrap/Card";
//import CardHeader from "react-bootstrap/esm/CardHeader";
import Book from "../components/cmpntBook";

const shelf = ({shelf, onUpdateShelf}) => {
  
  return (
    shelf.shelfBooks.hasOwnProperty("error") ||
    shelf.shelfBooks === undefined ||
    shelf.shelfBooks.length === 0 ? (
      <Card.Body style={{ padding: 50, display: "center" }}>
        <Card.Title>{shelf.title}</Card.Title>
        <h3 style={{color:"red"}}>No book found</h3>
      </Card.Body>
    ) : (
    <Card style={{ margin: 5, display: "Center", padding: 5 }}>
      <Card.Body>
        <Card.Title>{shelf.title}</Card.Title>
        <div className="bookshelf">
          <ol className="books-grid">
          {shelf.shelfBooks.map((book) => (
            <Book key={book.id} itemData={book} onUpdateShelf={onUpdateShelf} />
          ))}
          </ol>
        </div>

      </Card.Body>
    </Card>
  ));
};

export default shelf;
