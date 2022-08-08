import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Playing to the gallery', id: 1},
        {title: 'Dune', id: 2},
        {title: 'English pastoral', id: 3}
    ])
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;