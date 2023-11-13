import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';

import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Products from './components/Products';
import About from './components/About';
import ProductDescription from './components/ProductDescription';


function App() {
  return (
    <>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/products" element={<Products/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/products/:id" element={<ProductDescription/>}></Route>

</Routes>


    </>
  );
}

export default App;
