const searchField = document.getElementById('search-field');
const bookContainer = document.getElementById('book-container');
const bookResult = document.getElementById('book-result');
const error = document.getElementById('error');

const loadBook = () => {
    search = searchField.value;
    // celar search box
    searchField.value = '';
    bookContainer.innerHTML = '';
    bookResult.innerText = '';
    const url =`https://openlibrary.org/search.json?q=${search}` ;
    fetch(url)
    .then(res => res.json())
    .then(data => displayBook(data))
}
loadBook();
const displayBook = (allBooks) => {
    // error massage when 
    if (allBooks.numFound === 0) {
        error.innerText = 'No Result Found!';
    } else {
        error.innerText = '';
    }
    // declear Array from fetch object
    const books = allBooks.docs;

    // Books Counting Result
    bookResult.innerText = `Your Result is: ${books.length}`
    books.forEach(book => {
        console.log(book);
        const div = document.createElement('book-container');
        div.classList.add('col-md-3');
        div.innerHTML = `
                <img class="img-fluid m-4" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="">
                <h2>${book.title}</h2>
                <h6 class="text-info">Author By: ${book.author_name}</h6>
                <p>Publishar Name: ${book.publisher}</p>
                <p>First published in ${book.first_publish_year}</p>
        `
        bookContainer.appendChild(div);
    });
}
