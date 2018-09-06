document.addEventListener('DOMContentLoaded', () => {
  const formInput = document.querySelector('#new-item-form');
  formInput.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('#delete-button');
  deleteButton.addEventListener('click', handleDelete);
});

handleFormSubmit = function (event) {
  event.preventDefault();
  const formTitle = event.target.title.value;
  const formAuthor = event.target.author.value;
  const formCategory = event.target.category.value;
  const readingItem = document.createElement('div');
  readingItem.classList.add('readingItem');
  const formResult = document.querySelector('#reading-list');
  formResult.appendChild(readingItem);
  const bookTitle = document.createElement('h2');
  bookTitle.textContent = `Title: ${formTitle}`;
  readingItem.appendChild(bookTitle);
  const bookAuthor = document.createElement('h3');
  bookAuthor.textContent = `Author: ${formAuthor}`;
  readingItem.appendChild(bookAuthor);
  const bookCat = document.createElement('p');
  bookCat.textContent = `Category: ${formCategory}`;
  readingItem.appendChild(bookCat);
  const formInput = document.querySelector('#new-item-form');
  formInput.reset();
};

handleDelete = function (event) {
  const formResult = document.querySelector('#reading-list');
  formResult.textContent = '';
}
