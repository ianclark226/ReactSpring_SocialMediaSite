import './App.css';
import Authntication from './components/Authntication';
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={true?<HomePage/>: <Authntication />} />
      </Routes>
    </div>
  );
}

export default App;
