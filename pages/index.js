import Head from "next/head";
import { useRouter } from "next/router";
import HomePage from "./homePage/HomePage";

function App() {
  const { locale } = useRouter();
  const en = locale === "en";
  return (
    <div className="App">
      <Head>
        <title>Markéta Štorc Poláková – Frontend Developer</title>

        {/* Základní popis pro vyhledávače */}
        <meta
          name="description"
          content="Frontend vývojářka v Unicorn a.s. se zaměřením na React, TypeScript a UX/UI design."
        />

        {/* Klíčová slova */}
        <meta
          name="keywords"
          content="Markéta Štorc Poláková, frontend developer, React, TypeScript, UX, UI"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://marketapolakova.com/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Markéta Štorc Poláková – Frontend Developer"
        />
        <meta
          property="og:description"
          content="Frontend vývojářka v Unicorn a.s. se zaměřením na React, TypeScript a UX/UI design."
        />
        <meta property="og:url" content="https://marketapolakova.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <main>
        <HomePage en={en} />
      </main>
    </div>
  );
}

export default App;
