import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
    render() { 
        return (
            <ThemeContext.Consumer>{(context) => {
                return (
                    <button onClick={context.toggleTheme}>Click to toggle theme</button>
                )
            }}
            </ThemeContext.Consumer>
        );
    }
}
 
export default ThemeToggle;