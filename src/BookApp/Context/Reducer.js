export const bookReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_BOOKS":
      return { ...state, books: action.payload };

    // case "FETCH_WANT":
    //   return { ...state, want: action.payload };

    // case "FETCH_READ":
    //   return { ...state, read: action.payload };

    // case "FETCH_CURRENT":
    //   return { ...state, current: action.payload };

    default:
      return state;
  }
};
