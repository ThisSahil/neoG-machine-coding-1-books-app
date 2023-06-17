import React from "react";
import "./Main.css";
import { BookState } from "./Context/Context";
import Dropdown from "./Dropdown";

const Want = () => {
  const { bookState, bookDispatch } = BookState();

  const want = bookState.books.filter(
    (book) => book.category === "Want to Read"
  );

  return (
    <div className="want">
      <div className="main-heading">Want to Read</div>

      <div className="category-container">
        {want.map((book) => (
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

export default Want;
