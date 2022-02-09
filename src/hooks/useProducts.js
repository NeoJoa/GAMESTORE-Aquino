import { useEffect, useState } from "react";
import { productosAPI } from "../helpers/promises";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const result = await productosAPI;
      setProducts(result);
    } catch (error) {
      console.log({ error });
    } finally {
      console.log("Finalización del consumo de la API productsAPI");
    }
  };

  return {
    products,
  };
};

export default useProducts;
