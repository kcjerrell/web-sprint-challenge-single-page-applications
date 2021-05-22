import React, { useState } from "react";
import styled from "styled-components";
import FeatureHighlight from "./components/FeatureHighlight";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantsList";
import { Route, useHistory } from "react-router-dom";
import PizzaForm from "./components/PizzaForm";
import OrderSuccess from "./components/OrderSuccess";
import axios from "axios";

const AppContainer = styled.div`
    background-color: #eef2ee;
    width: 75%;
    margin: auto;
  `;

const secretStyle = {
  margin: '-24px 8px 0px 0px',
  color: 'white',
  textAlign: 'right',
  fontSize: 'x-small',
}

const App = () => {
  const [order, setOrder] = useState();
  const history = useHistory();

  const submitOrder = (newOrder) => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrder(res.data);
        history.push('/ordersuccess');
      })
      .catch(reason => console.log(reason));
  };

  return (
    <AppContainer>
      <Header />

      <Route path="/" exact>
        <FeatureHighlight />
        <p style={secretStyle}>I spent too much time on this page</p>
        <RestaurantList />
      </Route>

      <Route path="/pizza" exact>
        <PizzaForm submit={submitOrder} />
      </Route>

      <Route path="/ordersuccess" exact>
        <OrderSuccess order={order} />
      </Route>

    </AppContainer>
  );
};

export default App;
