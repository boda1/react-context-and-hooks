import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
                <li style={{ background: theme.ui }}>Wild swans</li>
                <li style={{ background: theme.ui }}>Dune</li>
                <li style={{ background: theme.ui }}>Ham on Rye</li>
            </ul>
        </div>
    );
}
 
export default BookList;
