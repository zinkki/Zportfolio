import './App.css';
import './assets/css/main.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Blank from './pages/Blank';
import Login from './pages/Login';
import NotFound from './pages/404';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Blank/>} />
        <Route path='/main/*' element={<Main/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
