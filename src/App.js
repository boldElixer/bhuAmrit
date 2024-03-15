import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Startup from './components/startup';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Startup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
