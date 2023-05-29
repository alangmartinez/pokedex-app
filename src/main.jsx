import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import customTheme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={customTheme} resetCSS>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);
