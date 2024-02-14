import "@/styles/globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider  attribute="class">
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

/**enableSystem={true} */