import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Cart from "../components/cart/Cart";
import Footer from "../components/footer/Footer";
import ItemDetailContainer from "../components/item-detail-container/ItemDetailContainer";
import ItemListContainer from "../components/item-list-container/ItemListContainer";
import Navbar from "../components/Navbar/navbar";
import NotFound from "../components/not-found/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
