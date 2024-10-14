// index.js

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
      .then((resp) => resp.json())
      .then((data) => {
          renderBooks(data); // Call renderBooks with the data
          extractInfo(data); // Call extractInfo to get specific information
      })
      .catch((error) => console.error("Error fetching books:", error));
}

function renderBooks(books) {
  const bookList = document.getElementById("book-list");

  // Clear any existing content
  bookList.innerHTML = '';

  // Loop through the books and create list items
  books.forEach((book) => {
      const listItem = document.createElement("li");
      listItem.textContent = book.name; // Assuming `name` holds the book title
      bookList.appendChild(listItem);
  });
}

function extractInfo(books) {
  // Get the 5th book in the series
  const fifthBook = books[4];
  console.log("5th Book:", fifthBook);

  // Assuming the API provides a characters array, get the 1031st character
  const characterIndex = 1030; // 1031st character (0-based index)
  const character = books[0].characters ? books[0].characters[characterIndex] : 'No character data available';
  console.log("1031st Character:", character);

  // Calculate the total number of pages of all the books
  const totalPages = books.reduce((sum, book) => sum + book.numberOfPages, 0); // Assuming `numberOfPages` holds the page count
  console.log("Total Pages:", totalPages);
}

// Call fetchBooks when the document is loaded
fetchBooks();

