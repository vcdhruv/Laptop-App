import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addlaptop from './Components/Laptop/Addlaptop';
import Editlaptop from './Components/Laptop/Editlaptop';
import Navbar from './Components/Layouts/Navbar';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import PageNotFound from "./Components/Pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar header="Laptop-App"/>
        <Routes>
          <Route path="/" index element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Laptop/Addlaptop' element={<Addlaptop/>}></Route>
          <Route path='/Laptop/Editlaptop/:id' element={<Editlaptop/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
