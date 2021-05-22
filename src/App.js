import React, { useState } from "react";
import styled from "styled-components";
import FeatureHighlight from "./components/FeatureHighlight";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantsList";
import { Route, useHistory } from "react-router-dom";
import PizzaForm from "./components/PizzaForm";
import OrderSuccess from "./components/OrderSuccess";

const AppContainer = styled.div`
    background-color: #eef2ee;
    width: 75%;
    margin: auto;
  `;

const App = () => {
  const [order, setOrder] = useState();
  const history = useHistory();

  const submitOrder = (newOrder) => {
    setOrder(newOrder);
    history.push('/ordersuccess');
   };

  return (
    <AppContainer>
      <Header />

      <Route path="/" exact>
        <FeatureHighlight />
        <RestaurantList />
      </Route>

      <Route path="/pizza" exact>
        <PizzaForm submit={submitOrder}/>
      </Route>

      <Route path="/ordersuccess" exact>
        <OrderSuccess order={order}/>
      </Route>

    </AppContainer>
  );
};

export default App;
