import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Landing from './pages/landingpage';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
