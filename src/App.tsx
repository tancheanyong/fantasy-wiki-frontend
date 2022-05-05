import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.scss';
import Characters from './components/Characters';
import Worldbuilding from './components/Worldbuilding';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/worldbuilding" element={<Worldbuilding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
