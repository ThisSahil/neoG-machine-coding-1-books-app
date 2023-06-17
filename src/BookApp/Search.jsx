import React, { useState } from "react";
import "./Search.css";
import "./Main.css";
import Dropdown from "./Dropdown";
import { BookState } from "./Context/Context";
import { Link } from "react-router-dom";

const Search = ({ onSearch }) => {
  const { bookState, bookDispatch } = BookState();
  const books = bookState.books;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(books);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);

    const value = event.target.value.toLowerCase();

    const updated = books.filter((book) =>
      book.bookName.toLowerCase().includes(value)
    );
    setSearchResults(updated);
  };

  return (
    <div>
      <Link to="/">Book Shelf</Link>
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />

      <div className="main-heading">All Books</div>

      <div className="books-container">
        {searchResults.map((book) => (
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

export default Search;
