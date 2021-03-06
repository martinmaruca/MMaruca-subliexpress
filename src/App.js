import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarIndex from './components/NavBar/NavBarIndex';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Clases from './components/Clases/Clases';
import BlogInicio from './components/Blog/BlogInicio';
import Blog from './components/Blog/Blog';
import Nosotoros from './components/Nosotros/Nosotros';
import Tienda from './components/Tienda/Tienda';
import Footer from './components/Footer/Footer';
import Entrada from './components/Entrada/Entrada';
import ItemDetailContarner from './components/ItemDetailContainer/ItemDetailContainer'; 
import {BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element= {<>
            <NavBarIndex />
            <ItemListContainer />
            <Clases />
            <BlogInicio />
          </> }/>
          <Route path="/nosotros" element={<Nosotoros />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/tienda" element={<Tienda />} /> 
          <Route path="/entrada" element={<Entrada />} />
          <Route path="item/:id" element={<ItemDetailContarner />} />
        </Routes>
        <Footer />  
      </BrowserRouter>
    </>
);
}

export default App;

