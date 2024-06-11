import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductListingPage from 'src/pages/ProductListing';
import ProductDetailPage from './pages/ProductDetail';
import CollectionsPage from './pages/Collections';
import Layout from './Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
