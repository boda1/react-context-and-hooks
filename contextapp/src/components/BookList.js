import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const bookList = useContext(BookContext);
    // <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>)
    console.log(bookList);
    return (
        <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
                {bookList.books.map(book => <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>)}
            </ul>
        </div>
    );
}
 
export default BookList;


