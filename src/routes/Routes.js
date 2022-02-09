import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
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
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
