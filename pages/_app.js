import '../styles/globals.css'; // ✅ Import Tailwind global styles

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
