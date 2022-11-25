import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const bookDetails = ({ book, showModal, onHideModal }) => {
  const [show, setShow] = useState(showModal);
  const handleClose = () => {
    setShow(false);
    onHideModal(false);
  };

  return (
    <Modal backdrop="static" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title size="sm">{book.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={8} md={4}>
            <img
              alt={book.title}
              style={{
                width: 128,
                height: 193,
              }}
              src={
                book.imageLinks !== undefined &&
                book.imageLinks.smallThumbnail !== undefined
                  ? book.imageLinks.smallThumbnail
                  : ""
              }
            />
          </Col>
          <Col xs={12} md={8}>
            <p className="details-body">
              <strong>Authors :</strong> {book.authors.join(",")}
            </p>
            <p className="details-body">
              <strong>Publish date :</strong> {book.publishedDate}
            </p>
            <p className="details-body">
              <strong>Publisher :</strong> {book.publisher}
            </p>
            <p className="details-body">
              <strong>Language :</strong> {book.language}
            </p>
            <p className="details-body">
              <strong>Catigories :</strong>
              {book.categories ? book.categories.join(" , ") : "Not Available"}
            </p>
            <p className="details-body">
              <strong>Number of Pages :</strong> {book.pageCount}
            </p>
            <p className="details-body">
              <strong>Average Rating :</strong>{" "}
              {book.averageRating ? book.averageRating : "0"}
            </p>

            <p className="details-body">
              <a
                href={book.previewLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                <i>Book Preview Link</i>
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <p className="details-body">
            <strong>Discription :</strong>{" "}
            {book.description ? book.description : "Not Available"}
          </p>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default bookDetails;
