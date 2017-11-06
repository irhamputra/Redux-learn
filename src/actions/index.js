export function selectBook(book) {
  // selectBook is in ActionCreator
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
