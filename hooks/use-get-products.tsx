import axios from "axios";
import { useEffect, useState } from "react";

export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  discountPercentage: number;
  thumbnail: string;
  images: string[];
};
interface ProductResponse {
  products: Product[];
  total: number;
}
const useGetProducts = () => {
  const [products, setProducts] = useState<ProductResponse>({
    products: [],
    total: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://linode25.eqserver.net/dummy-product.json"
        );
        setProducts({
          products: response.data.products,
          total: response.data.total,
        });
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);
  return { products, loading, error };
};

export default useGetProducts;
