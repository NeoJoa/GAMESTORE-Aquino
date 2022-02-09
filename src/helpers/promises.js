import { products } from "../data/productos";

export const productosAPI = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});
