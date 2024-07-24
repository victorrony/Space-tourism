import Head from "next/head";
import "../styles/globals.css";
import Nav from "../components/Nav";

export default function App({ Component, pageProps }) {
   return (
      <>
         <Head>
            <title>Space tourism</title>
            <meta name="description" content="Space tourism website " />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/assets/favicon-32x32.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
               href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
               rel="stylesheet"
            />
         </Head>
         <>
            <Nav />
            <Component {...pageProps} />
         </>
      </>
   );
}
