const searchField = document.getElementById('search-field');
const bookContainer = document.getElementById('book-container');
// const searchBook = () => {
//     search = searchField.value;
//     console.log(search);
//     // celar search box
//     searchField.value = '';
    
// }
// searchBook();
const loadBook = () => {
    search = searchField.value;
    console.log(search);
    // celar search box
    searchField.value = '';
    const url =`http://openlibrary.org/search.json?q=${search}` ;
    // const url =(`http://openlibrary.org/search.json?q=javascript`) ;
    fetch(url)
    .then(res => res.json())
    .then(data => displayBook(data.docs))
}
loadBook();
const displayBook = (books)=>{
    books.forEach(book => {
        console.log(book);
        const div = document.createElement('book-container');
        div.classList.add('col-md-3');
        div.innerHTML = `
                <img class="img-fluid" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="">
                <h2>${book.title}</h2>
                <p>Book autor:${book.author_name}</p>
                <p>${book.first_publish_year}</p>
        `
        bookContainer.appendChild(div);
    });
}
