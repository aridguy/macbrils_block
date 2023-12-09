// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import ViewBlogs from './Routes/ViewBlogs/ViewBlogs';
import Contact from './Routes/Contact/Contact';


function App() {
  return (
    <div>

    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/viewblogs/:id" element={<ViewBlogs />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
