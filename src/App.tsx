import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
