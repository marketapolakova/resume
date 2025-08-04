/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["cs", "en"], // seznam podporovaných jazyků
    defaultLocale: "cs", // výchozí jazyk (bez prefixu)
    localeDetection: false, // vypne automatickou detekci jazyka
  },
};
module.exports = nextConfig;
