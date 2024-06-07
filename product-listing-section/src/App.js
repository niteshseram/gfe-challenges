import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductListingPage from 'src/pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetail';

function App() {
  return (
    <Routes>
      <Route path="/products/:productId" element={<ProductDetailPage />} />
      <Route path="/products" element={<ProductListingPage />} />
    </Routes>
  );
}

export default App;
