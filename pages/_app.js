import '../styles/globals.css'
import Head from "next/head";
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@400;700&family=Lobster&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.lineicons.com/3.0/lineicons.css" /> 
      </Head>
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
