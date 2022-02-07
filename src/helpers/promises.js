import { prod } from "../data/productos";

export const productosAPI = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(prod);
  }, 2000);
});
