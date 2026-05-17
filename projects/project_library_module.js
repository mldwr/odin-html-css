
function Book(title, author, pages, isRead) {
  const id = crypto.randomUUID();
}

Book.prototype.toggleReadStatus = function() {
  this.isRead = !this.isRead;
};

function Library() {
  const myLibrary = [];

  function displayLibrary() {
    const libraryContainer = document.getElementById('library-container');
    if (!libraryContainer) return;
    
    libraryContainer.innerHTML = '';

    myLibrary.forEach((book, index) => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');
      bookCard.setAttribute('data-index', index);

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
        removeBook(index);
        displayLibrary();
      });

      bookCard.querySelector('.toggle-read-btn').addEventListener('click', () => {
        book.toggleReadStatus();
        displayLibrary();
      });

      libraryContainer.appendChild(bookCard);
    });
  }

  function addBookToLibrary(title, author, pages, isRead) {
    const newBook = Book(title, author, pages, isRead);
    console.log(newBook);
    myLibrary.push(newBook);
    displayLibrary();
  }

  function removeBook(index) {
    myLibrary.splice(index, 1);
    displayLibrary();
  }

  return { displayLibrary, addBookToLibrary, removeBook };
}




function ScreenController() {
  const library = Library();

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

}

ScreenController();
