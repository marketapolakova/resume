import Head from "next/head";
import { useRouter } from "next/router";
import HomePage from "../homePage/HomePage";

function App() {
  const { locale } = useRouter();
  const en = locale === "en";
  return (
    <div className="App">
      <Head>
        {/* Titulek stránky v angličtině */}
        <title>Markéta Štorc Poláková – Frontend Developer</title>

        {/* Popis v angličtině */}
        <meta
          name="description"
          content="Frontend developer at Unicorn a.s., specializing in React, TypeScript, and UX/UI design."
        />

        {/* Klíčová slova */}
        <meta
          name="keywords"
          content="Markéta Štorc Poláková, frontend developer, React, TypeScript, UX UI"
        />

        {/* Canonical URL pro angličtinu */}
        <link rel="canonical" href="https://marketapolakova.com/en" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Markéta Štorc Poláková – Frontend Developer"
        />
        <meta
          property="og:description"
          content="Frontend developer at Unicorn a.s., specializing in React, TypeScript, and UX/UI design."
        />
        <meta property="og:url" content="https://marketapolakova.com/en" />
        <meta property="og:type" content="website" />
      </Head>
      <main>
        <HomePage en={en} />
      </main>
    </div>
  );
}

export default App;
