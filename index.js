import React, { useState } from 'react';

function BookList() {
  const [books, setBooks] = useState(['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice', 'The Catcher in the Rye', 'Animal Farm', 'Brave New World', 'Lord of the Flies', 'The Hobbit', 'The Hitchhiker\'s Guide to the Galaxy']);
  const [removedBooks, setRemovedBooks] = useState([]);

  function deleteBook(book) {
    const newBooks = books.filter(b => b !== book);
    setBooks(newBooks);
    setRemovedBooks([...removedBooks, book]);
  }

  function revertBook(book) {
    const newRemovedBooks = removedBooks.filter(b => b !== book);
    setRemovedBooks(newRemovedBooks);
    setBooks([...books, book]);
  }

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book}>
            {book}
            <button onClick={() => deleteBook(book)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Removed Books</h2>
      <ul>
        {removedBooks.map(book => (
          <li key={book}>
            {book}
            <button onClick={() => revertBook(book)}>Revert</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
