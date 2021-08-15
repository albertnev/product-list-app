import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentPage, getProductsPerPage } from '../redux/selectors';
import fetchProductsList from '../fetchers/fetchProductsList';

const useFetchProducts = () => {
  const page = useSelector(getCurrentPage);
  const productsPerPage = useSelector(getProductsPerPage);

  const [products, setProducts] = useState({ products: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setHasError(false);
      setIsLoading(true);

      try {
        const response = await fetchProductsList({ page, productsPerPage });
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setHasError(true);
      }

      setIsLoading(false);
    };

    if (page && productsPerPage) fetchProducts();
  }, [page, productsPerPage]);

  return [{ products, isLoading, hasError }];
};

export default useFetchProducts;
