import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import useProductFilters from './hooks/useProductFilters';
import {
  CATEGORY_OPTIONS,
  COLLECTIONS_OPTIONS,
  COLORS_OPTIONS,
  RATING_OPTIONS,
} from 'src/constants';

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
    filterCount,
    onSelect,
    resetFilters,
    onSortChange,
  } = useProductFilters();

  const getProducts = useCallback(async () => {
    setIsProductsLoading(true);

    let queryString = '';
    if (
      selectedColors.size > 0 ||
      selectedCollections.size > 0 ||
      selectedRating.size > 0 ||
      selectedCategory.size > 0
    ) {
      queryString = [
        ...Array.from(selectedColors).map(
          color => `${COLORS_OPTIONS.key}=${encodeURIComponent(color)}`
        ),
        ...Array.from(selectedCollections).map(
          collection =>
            `${COLLECTIONS_OPTIONS.key}=${encodeURIComponent(collection)}`
        ),
        ...Array.from(selectedRating).map(
          rating => `${RATING_OPTIONS.key}=${encodeURIComponent(rating)}`
        ),
        ...Array.from(selectedCategory).map(
          category => `${CATEGORY_OPTIONS.key}=${encodeURIComponent(category)}`
        ),
      ].join('&');
    }

    queryString = `${queryString ? `${queryString}&` : ''}sort=${
      selectedSort.value
    }&direction=${selectedSort.direction}`;

    const data = await fetch(
      `https://www.greatfrontend.com/api/projects/challenges/e-commerce/products${
        queryString ? `?${queryString}` : ''
      }`
    );
    const result = await data.json();

    if (!result.error) {
      setProducts(result.data);
    }
    setIsProductsLoading(false);
  }, [
    selectedColors,
    selectedCategory,
    selectedCollections,
    selectedRating,
    selectedSort,
  ]);

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
      filterCount,
      onSelect,
      resetFilters,
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
    filterCount,
    onSelect,
    resetFilters,
    onSortChange,
  ]);

  return (
    <ProductListingContext.Provider value={value}>
      {children}
    </ProductListingContext.Provider>
  );
};

export default ProductListingContextProvider;
