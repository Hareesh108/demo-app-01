import React, { useRef } from "react";
import { SnackbarKey, SnackbarProvider } from "notistack";
import "./App.css";
import { ProgressBarStyle } from "./components/ProgressBar";
import ScrollToTop from "./components/ScrollToTop";
import ThemeProvider from "./theme";
import Router from "./routes";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { IconButton } from "@mui/material";
import Iconify from "./components/iconify";

function App() {
  const bodyStyle = {
    height: "auto",
    maxWidth: 1000,
    borderRadius: 6,
    overflow: "hidden",
    textWrap: "wrap",
    padding: 10,
  };

  const notistackRef = useRef<any>(null);
  const onClose = (key: SnackbarKey) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <SnackbarProvider
            ref={notistackRef}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            autoHideDuration={5000}
            action={(key) => (
              <IconButton
                size="small"
                onClick={onClose(key)}
                sx={{ p: 0.5, position: "absolute", right: 2, top: 2 }}
              >
                <Iconify icon="ic:outline-close" sx={{ color: "white" }} />
              </IconButton>
            )}
          >
            <BrowserRouter>
              <div style={{ minHeight: "100vh", height: "100vh" }}>
                <ProgressBarStyle />
                <ScrollToTop />
                <Router />
              </div>
            </BrowserRouter>
          </SnackbarProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
