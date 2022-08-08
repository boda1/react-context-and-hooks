import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext)
    const isAuthStatus = isAuthenticated ? 'Logout' : 'Login';
    const theme = isLightTheme ? light : dark;
    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context app</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>{isAuthStatus}</li>
        </ul>
    </nav>
    );
}
 
export default Navbar;