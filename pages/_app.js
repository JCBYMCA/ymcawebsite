import '../styles/globals.css'
import {NextIntlProvider} from "next-intl";
import NavBar from "../components/NavBar/NavBar";
import {useRouter} from "next/router";
import Footer from "../components/common/Footer";
import TopBar from "../components/common/TopBar";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const isHomePage = router.pathname === '/';
    const isDepartment = router.pathname === '/department';
  return (
      <NextIntlProvider messages={pageProps.messages}>
          <TopBar/>
          <NavBar isHome={isHomePage} isDepartment={isDepartment} />
          <Component {...pageProps} />
          <Footer/>
      </NextIntlProvider>
  )
}

export default MyApp
