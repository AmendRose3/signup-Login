import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from './Signup';
import Login from './Login';
import Home from './Home'; // Import the Home component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} /> {/* Render the Home component for '/home' route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
