import React from "react";
import styled from "styled-components";
import FeatureHighlight from "./components/FeatureHighlight";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantsList";

const AppContainer = styled.div`
    background-color: #eef2ee;
    width: 75%;
    margin: auto;
  `;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <FeatureHighlight />
      <RestaurantList />
    </AppContainer>
  );
};

export default App;
