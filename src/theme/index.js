import { extendTheme } from "@chakra-ui/react";
import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import "@fontsource/share-tech-mono";


const customTheme = extendTheme({
  fonts: {
    heading: "'Share Tech Mono', sans-serig",
    body: "'Share Tech Mono', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#FAF8F1",
      },
    },
  },
});

export default customTheme;
