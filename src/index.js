import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, /* Routes, Route */ } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter basename="/contact-book-app-frontend">
    <Provider store={store}>
      <ChakraProvider>
        {/* <Routes>
          <Route path="*" element={<App />}></Route>
        </Routes> */}
        <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
