import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Contacto from "./Contacto";
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";

function App() {

 


  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route
              path="productos/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element ={<Carrito/>}/>
            <Route path="/checkout" element ={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </CartProvider> 
    </div>
  );
}

export default App;
