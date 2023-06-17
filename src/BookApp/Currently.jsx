import React from "react";
import "./Main.css";
import { BookState } from "./Context/Context";
import Dropdown from "./Dropdown";

const Currently = () => {
  const { bookState, bookDispatch } = BookState();

  const current = bookState.books.filter(
    (book) => book.category === "Currently Reading"
  );
  return (
    <div className="current">
      <div className="main-heading">Currently Reading</div>
      <div className="category-container">
        {current.map((book) => (
          <div className="book">
            <img src={book.bookImageLink} />
            <h5>{book.bookName}</h5>
            <div>{book.writerName}</div>
            <Dropdown id={book.bookId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Currently;
