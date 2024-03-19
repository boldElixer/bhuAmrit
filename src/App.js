import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Startup from './components/startup';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import Record from './components/record';
import View from './components/view';
import Success from './success';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Startup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/record' element={<Record />} />
        <Route path='/view' element={<View />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
