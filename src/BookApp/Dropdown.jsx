import React, { useState } from "react";
import "./Dropdown.css";
import { BookState } from "./Context/Context";

const Dropdown = ({ id }) => {
  const { bookState, bookDispatch } = BookState();
  console.log(id);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    // console.log(option);
    const updated = bookState.books.map((book) => {
      //   console.log(id);
      //   console.log(book.bookId);
      if (book.bookId === id) {
        console.log("Hello");
        book.category = option;
      }

      return { ...book };
    });

    console.log(updated);

    bookDispatch({ type: "FETCH_BOOKS", payload: updated });
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <div className="dropdown-heading" onClick={toggleDropdown}>
        Move to
      </div>
      {isOpen && (
        <div className="dropdown-options">
          <button
            className={`dropdown-option${
              selectedOption === "Currently Reading" ? " active" : ""
            }`}
            onClick={() => handleOptionChange("Currently Reading")}
          >
            Currently Reading
          </button>
          <button
            className={`dropdown-option${
              selectedOption === "Want to Read" ? " active" : ""
            }`}
            onClick={() => handleOptionChange("Want to Read")}
          >
            Want to Read
          </button>
          <button
            className={`dropdown-option${
              selectedOption === "Read" ? " active" : ""
            }`}
            onClick={() => handleOptionChange("Read")}
          >
            Read
          </button>
          <button
            className={`dropdown-option${
              selectedOption === "None" ? " active" : ""
            }`}
            onClick={() => handleOptionChange("None")}
          >
            None
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
