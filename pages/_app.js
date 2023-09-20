// pages/_app.js

import { useRouter } from 'next/router';
import '../styles/globals.css';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Define an array of page paths that should not use the layout
  const pagesWithoutLayout = ['/login', '/register'];

  // Check if the current page is in the array of excluded pages
  const excludeLayout = pagesWithoutLayout.includes(router.pathname);

  // Render the layout only if the page is not excluded
  return excludeLayout ? <Component {...pageProps} /> : <Layout><Component {...pageProps} /></Layout>;
}

export default MyApp;
