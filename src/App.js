import './App.css';
import Home from './components/Home';
import Word from './components/Word';
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path='/' element={<h1>Routing Practice Assignment</h1>} />
                    <Route path='/home' element={<Home/>} />
                    <Route path='/:item/:color' element={<Word/>} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
