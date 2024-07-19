import React from "react";
import "./App.css";
import { ProgressBarStyle } from "./components/ProgressBar";
import ScrollToTop from "./components/ScrollToTop";
import ThemeProvider from "./theme";
import Router from "./routes";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <BrowserRouter>
            <div style={{ minHeight: "100vh", height: "100vh" }}>
              <ProgressBarStyle />
              <ScrollToTop />
              <Router />
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
