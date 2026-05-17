
function Book(title, author, pages, isRead) {
  const id = crypto.randomUUID();
  const toggleReadStatus = () => { isRead = !isRead; };
  // Return an object that includes the getter for state and the method
  return { 
    title, author, pages, 
    get isRead() { return isRead; }, // Use a getter to keep it read-only if desired
    toggleReadStatus, 
    id 
  };
}

function Library() {
  const books = [];
  const addBookToLibrary = (title, author, pages, isRead) => {
    books.push(Book(title, author, pages, isRead));
  };
  const removeBook = (index) => books.splice(index, 1);
  const getBooks = () => [...books]; // Return a copy to protect the original array

  return { addBookToLibrary, removeBook, getBooks };
}





function ScreenController() {
  const library = Library();
  const libraryContainer = document.getElementById('library-container');

  const updateScreen = () => {
    
    libraryContainer.innerHTML = '';

    library.getBooks().forEach((book, index) => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');
      bookCard.setAttribute('data-index', index);

      console.log('book:', book);

      bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Status: <span class="${book.isRead ? 'text-read' : 'text-unread'}">${book.isRead ? 'Read' : 'Not Read'}</span></p>
        <div class="card-buttons">
          <button class="toggle-read-btn ${book.isRead ? 'status-read' : 'status-unread'}">${book.isRead ? 'Mark Unread' : 'Mark Read'}</button>
          <button class="remove-btn">Remove</button>
        </div>
      `;

      bookCard.querySelector('.remove-btn').addEventListener('click', () => {
        library.removeBook(index);
        updateScreen();
      });

      bookCard.querySelector('.toggle-read-btn').addEventListener('click', () => {
        book.toggleReadStatus();
        updateScreen();
      });

      libraryContainer.appendChild(bookCard);
    });
  };

  /** Event Listeners */
  const addBookBtn = document.getElementById('addBookBtn');
  const bookDialog = document.getElementById('bookDialog');
  const bookForm = document.getElementById('bookForm');
  const cancelBtn = document.getElementById('cancelBtn');

  if (addBookBtn && bookDialog) {
    addBookBtn.addEventListener('click', () => {
      bookDialog.showModal();
    });
  }

  if (cancelBtn && bookDialog) {
    cancelBtn.addEventListener('click', () => {
      bookDialog.close();
    });
  }


  if (bookForm) {
    bookForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const pages = document.getElementById('pages').value;
      const isRead = document.getElementById('isRead').checked;

      library.addBookToLibrary(title, author, pages, isRead);
      
      bookForm.reset();
      if (bookDialog) bookDialog.close();
    });
  }

  // Add some initial books for demonstration
  library.addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
  library.addBookToLibrary('1984', 'George Orwell', 328, false);
  updateScreen();

}

ScreenController();
