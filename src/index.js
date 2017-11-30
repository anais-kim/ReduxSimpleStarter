import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB64j0q5c4ZXImoMcPxA0_sUBpZTAkQZHI';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('.container'));