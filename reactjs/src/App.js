
import './App.css';
import { Navbar } from "./compon/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./pages/cart";
import { Shop } from "./pages/shop";
import { ProductDetails } from "./pages/ProductDetails";
import { ShopContextProvider } from './pages/shop-contex';
function App() {
  return (
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </ShopContextProvider>


  );
}
export default App;
