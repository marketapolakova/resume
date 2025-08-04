import "../styles/globals.css";
import "../styles/App.css"; // původní globální styly z CRA
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
