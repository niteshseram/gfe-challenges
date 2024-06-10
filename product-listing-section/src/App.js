import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductListingPage from 'src/pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetail';
import Layout from './Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/products" element={<ProductListingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
