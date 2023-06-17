import React from "react";
import "./Main.css";
import { BookState } from "./Context/Context";
import Dropdown from "./Dropdown";

const Read = () => {
  const { bookState, bookDispatch } = BookState();

  const read = bookState.books.filter((book) => book.category === "Read");
  return (
    <div className="read">
      <div className="main-heading">Read</div>
      <div className="category-container">
        {read.map((book) => (
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

export default Read;
