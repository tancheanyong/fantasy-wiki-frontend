import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.scss';
import Characters from './components/characters/Characters';
import Worldbuilding from './components/Worldbuilding';
import Home from './components/Home';
import CharacterPage from './components/characters/CharacterPage';
import CharacterCreation from './components/characters/CharacterCreation';
import StoryBoard from './components/storyBoard/StoryBoard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route
            path="/characters/character-creation"
            element={<CharacterCreation />}
          />
          <Route path="/characters/:name" element={<CharacterPage />} />
          <Route path="/worldbuilding" element={<Worldbuilding />} />
          <Route path="/storyboard" element={<StoryBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
