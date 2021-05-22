import React from "react";
import styled from "styled-components";
import FeatureHighlight from "./components/FeatureHighlight";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantsList";
import { Route } from "react-router-dom";
import PizzaForm from "./components/PizzaForm";

const AppContainer = styled.div`
    background-color: #eef2ee;
    width: 75%;
    margin: auto;
  `;

const App = () => {

  const submitOrder = () => { };

  return (
    <AppContainer>
      <Header />

      <Route path="/" exact>
        <FeatureHighlight />
        <RestaurantList />
      </Route>

      <Route path="/order-pizza" exact>
        <PizzaForm submit={submitOrder}/>
      </Route>

    </AppContainer>
  );
};

export default App;
