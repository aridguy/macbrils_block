// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Create from './Routes/Create/Create';


function App() {
  return (
    <div>

    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
      </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
