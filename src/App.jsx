import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Catalog from "./pages/catalog";
import Cart from "./pages/cart";
import Users from "./pages/users";
import Contact from "./pages/contact";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/users" element={<Users />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
