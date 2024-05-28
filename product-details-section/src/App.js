import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductDetailPage from './pages/ProductDetail';

function App() {
  return (
    <Routes>
      <Route path="/products/:productId" element={<ProductDetailPage />} />
    </Routes>
  );
}

export default App;
