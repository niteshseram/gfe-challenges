import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetailsContext = createContext({
  product: null,
  isProductLoading: false,
});

export const useProductDetailsContext = () => useContext(ProductDetailsContext);

const ProductDetailsContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isProductLoading, setIsProductLoading] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [itemQuantity, setItemQuantity] = useState(0);

  const getProduct = useCallback(async () => {
    setIsProductLoading(true);
    const data = await fetch(
      `https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/${productId}`
    );
    const result = await data.json();

    if (!result.error) {
      setProduct(result);
      setSelectedColor(result.colors[0]);
    } else {
      return navigate('/not-found');
    }
    setIsProductLoading(false);
  }, [productId, navigate]);

  const decrementQuantity = useCallback(() => {
    setItemQuantity(prev => (prev > 0 ? prev - 1 : 0));
  }, []);

  const incrementQuantity = useCallback(() => {
    setItemQuantity(prev => prev + 1);
  }, []);

  const getUnavailableColors = useCallback(() => {
    const colorsInStock = new Set();
    const allColors = new Set(product.colors);

    product.inventory.forEach(item => {
      if (item.stock > 0) {
        colorsInStock.add(item.color);
      }
    });

    const unavailableColors = [...allColors].filter(
      color => !colorsInStock.has(color)
    );

    return unavailableColors;
  }, [product]);

  const getUnavailableSizes = useCallback(
    color => {
      const sizesInStock = new Set();
      const allSizes = new Set(product.sizes);

      product.inventory.forEach(item => {
        if (item.stock > 0 && item.color === color) {
          sizesInStock.add(item.size);
        }
      });

      const unavailableSizes = [...allSizes].filter(
        size => !sizesInStock.has(size)
      );

      return unavailableSizes;
    },
    [product]
  );

  const getInventoryData = useCallback(() => {
    let data = {};
    product.inventory.forEach(item => {
      if (item.size === selectedSize && item.color === selectedColor) {
        data = item;
      }
    });

    return data;
  }, [product, selectedColor, selectedSize]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  // Set first available size as the initial selected size
  useEffect(() => {
    if (!product || !selectedColor) {
      return;
    }

    const unavailableSizes = getUnavailableSizes(selectedColor);
    const availableSizes = [...product.sizes].filter(
      size => !unavailableSizes.includes(size)
    );
    if (availableSizes.length > 0) {
      setSelectedSize(availableSizes[0]);
    }
  }, [getUnavailableSizes, selectedColor, product]);

  const value = useMemo(() => {
    return {
      product,
      isProductLoading,
      selectedColor,
      setSelectedColor,
      selectedSize,
      setSelectedSize,
      itemQuantity,
      incrementQuantity,
      decrementQuantity,
      getUnavailableColors,
      getUnavailableSizes,
      getInventoryData,
    };
  }, [
    product,
    isProductLoading,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
    itemQuantity,
    incrementQuantity,
    decrementQuantity,
    getUnavailableColors,
    getUnavailableSizes,
    getInventoryData,
  ]);

  return (
    <ProductDetailsContext.Provider value={value}>
      {children}
    </ProductDetailsContext.Provider>
  );
};

export default ProductDetailsContextProvider;
