import React from 'react';
import "./app.css"
import PersonController from './components/PersonController';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <PersonController />
            </header>
        </div>
    );
}

export default App;
