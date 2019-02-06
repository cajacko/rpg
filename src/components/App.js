import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Routes from "./Routes";
import Nav from "./Nav";
import { mainRoutes } from "../config/routes";
import { persistor, store } from "../store";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
    width: 100vw;
    position: relative;
    padding: 0;
    margin: 0;
    font-family: helvetica, sans-serif;
    max-width: 100%;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  max-width: 100%;
  overflow: hidden;
`;

const App = () => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <>
            <Content>
              <Routes routes={mainRoutes} />
            </Content>
            <Nav />
          </>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </>
);

export default App;
