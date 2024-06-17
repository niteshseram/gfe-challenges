import { Route, Routes } from 'react-router-dom';

import './App.css';

import Layout from './Layout';
import CartPage from './pages/Cart';
import CheckoutPage from './pages/Checkout';

import CartContextProvider from './context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </CartContextProvider>
  );
}

export default App;
