import React, { createContext, useState } from 'react';
import uniqid from 'uniqid';

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState([
        {
            id: 1,
            title: 'திருக்குறள்',
            author: 'திருவள்ளுவர்'
        },
        {
            id: 2,
            title: 'திருப்புகழ்',
            author: 'அருணகிரிநாதர்'
        }
    ]);

    const addBook = book => {
        setBooks([...books, { ...book, id: uniqid() }]);
    };

    const deleteBook = id => {
        setBooks(books.filter(book => book.id !== id));
    };

    return (
        <BookContext.Provider value={{ books, addBook, deleteBook }}>
            {children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;
