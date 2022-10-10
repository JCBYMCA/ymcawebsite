import '../styles/globals.css'
import {NextIntlProvider} from "next-intl";
import Footer from "../components/HomePageComponents/Footer";
import NavBar from "../components/NavBar/NavBar";
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const isHomePage = router.pathname === '/';
  return (
      <NextIntlProvider messages={pageProps.messages}>
          <NavBar isHome={isHomePage}/>
          <Component {...pageProps} />
          <Footer/>
      </NextIntlProvider>
  )
}

export default MyApp
