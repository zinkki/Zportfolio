import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        WELCOME zinkki! new branch test
      </header>
      <Routes>
        <Route path='/' element={<Main></Main>} />
      </Routes>
    </div>
  );
}

export default App;
