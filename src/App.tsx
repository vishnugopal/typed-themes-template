import React from 'react';
import Button from './components/Button';

import { ThemeProvider } from 'styled-components';
import darkTheme from './themes/darkTheme';

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={darkTheme}>
                <Button title="Click!" />
            </ThemeProvider>
        </div>
    );
}

export default App;
