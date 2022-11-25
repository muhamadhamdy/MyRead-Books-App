import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import BookMenu from "./cmpntMenu";
import Button from "react-bootstrap/Button";
import BookDetails from "./cmpntDetails";

const book = ({ itemData, onUpdateShelf }) => {
  const [showDetails, setShowDetails] = useState(false);
  const showBookDetails = () => {
    setShowDetails(true);
  };
  const hideModal = () => {
    setShowDetails(false);
  };
  //console.log(imgURL);
  return (
    <Card style={{ width: "10rem", minWidth: "10rem", margin: 10 }}>
      <Card.Body>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage:
                  itemData.imageLinks !== undefined &&
                  itemData.imageLinks.smallThumbnail !== undefined
                    ? `URL(${itemData.imageLinks.smallThumbnail})`
                    : "",
              }}
            ></div>
            <BookMenu key={itemData.id} bookInfo={itemData} onUpdateShelf={onUpdateShelf} />
            <div className="book-details">
              <Button variant="link" onClick={showBookDetails}></Button>
            </div>
          </div>
          <div className="book-title">{itemData.title}</div>
          <div className="book-authors">
            {itemData.authors !== undefined && itemData.authors.join(" , ")}
          </div>
        </div>
      </Card.Body>
      {showDetails && (
        <BookDetails
          key={itemData.id}
          book={itemData}
          showModal={true}
          onHideModal={hideModal}
        />
      )}
    </Card>
  );
};

export default book;
