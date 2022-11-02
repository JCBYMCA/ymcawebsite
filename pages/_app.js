import '../styles/globals.css'
import {NextIntlProvider} from "next-intl";
import NavBar from "../components/HomePageComponents/NavBar/NavBar";
import Footer from "../components/common/Footer";
import TopBar from "../components/common/TopBar";

function MyApp({ Component, pageProps }) {
  return (
      <NextIntlProvider messages={pageProps.messages}>
          <TopBar/>
          <NavBar/>
          <Component {...pageProps} />
          <Footer/>
      </NextIntlProvider>
  )
}

export default MyApp
