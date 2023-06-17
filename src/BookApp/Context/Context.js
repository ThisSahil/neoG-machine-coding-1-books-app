import React, { createContext, useContext, useEffect, useReducer } from "react";
import { bookReducer } from "./Reducer";
import { books } from "../../fakeFetch/api";

const BooksContext = createContext();

const Context = ({ children }) => {
  const [bookState, bookDispatch] = useReducer(bookReducer, {
    books: [],
  });

  const fetchBooks = () => {
    setTimeout(() => {
      bookDispatch({ type: "FETCH_BOOKS", payload: books });
    }, 1000);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BooksContext.Provider value={{ bookState, bookDispatch }}>
      {children}
    </BooksContext.Provider>
  );
};

export default Context;

export const BookState = () => {
  return useContext(BooksContext);
};
