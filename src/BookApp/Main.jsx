import React, { useEffect } from "react";
import Currently from "./Currently";
import Read from "./Read";
import Want from "./Want";
import "./Main.css";
import { BookState } from "./Context/Context";
import { Link } from "react-router-dom";

const Main = () => {
  const { bookState, bookDispatch } = BookState();

  let updated = bookState.books;
  //   console.log(updated);

  // bookDispatch({ type: "FETCH_CURRENT", payload: updated });
  // bookDispatch({ type: "FETCH_READ", payload: updated });
  // bookDispatch({ type: "FETCH_WANT", payload: updated });

  //   console.log(bookState);

  return (
    <div className="main-container">
      <Link to="/search">Search</Link>
      <Currently />
      <Want />
      <Read />
    </div>
  );
};

export default Main;
