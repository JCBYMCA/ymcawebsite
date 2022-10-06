import '../styles/globals.css'
import {NextIntlProvider} from "next-intl";
import Footer from "../components/HomePageComponents/Footer";

function MyApp({ Component, pageProps }) {
  return (
      <NextIntlProvider messages={pageProps.messages}>
          <Component {...pageProps} />
          <Footer/>
      </NextIntlProvider>
  )
}

export default MyApp
