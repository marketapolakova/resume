import "../styles/globals.css";
import "../styles/App.css"; // původní globální styly z CRA
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import ChatWidget from "../components/chat/ChatWidget";

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <>
      <Component {...pageProps} />
      <ChatWidget en={locale === "en"} />
    </>
  );
}
