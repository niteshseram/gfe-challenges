import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import useProductFilters from './hooks/useProductFilters';

const ProductListingContext = createContext();

export const useProductListingContext = () => useContext(ProductListingContext);

const ProductListingContextProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [isProductsLoading, setIsProductsLoading] = useState(true);
  const {
    selectedCollections,
    selectedCategory,
    selectedColors,
    selectedRating,
    selectedSort,
    onSelect,
    onSortChange,
  } = useProductFilters();

  const getProducts = useCallback(async () => {
    setIsProductsLoading(true);
    const data = await fetch(
      `https://www.greatfrontend.com/api/projects/challenges/e-commerce/products`
    );
    const result = await data.json();

    if (!result.error) {
      setProducts(result.data);
    }
    setIsProductsLoading(false);
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const value = useMemo(() => {
    return {
      products,
      isProductsLoading,

      selectedCollections,
      selectedCategory,
      selectedColors,
      selectedRating,
      selectedSort,
      onSelect,
      onSortChange,
    };
  }, [
    products,
    isProductsLoading,

    selectedCollections,
    selectedCategory,
    selectedColors,
    selectedRating,
    selectedSort,
    onSelect,
    onSortChange,
  ]);

  return (
    <ProductListingContext.Provider value={value}>
      {children}
    </ProductListingContext.Provider>
  );
};

export default ProductListingContextProvider;
