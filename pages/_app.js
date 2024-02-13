import '../styles/globals.css'
import {NextIntlProvider} from "next-intl";
import NavBar from "../components/HomePageComponents/NavBar/NavBar";
import Footer from "../components/common/Footer";
import TopBar from "../components/common/TopBar";
import { useState } from 'react';
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
  const [loader, setLoader]= useState(true);

  return (
      <NextIntlProvider messages={pageProps.messages}>
          <TopBar/>
          {/*<NavBar/>*/}
          {loader && <div className='w-full h-full bg-white fixed top-0 z-[6000] flex justify-center items-center'>
            <div>
              <Image src={'/assets/images/logo.png'} alt={'Loader'} width={200} height={200} />
              {/* <Image src={'/assets/images/logo.png'} alt={'Loader'} width={200} height={200} /> */}
            </div>
            </div>}
            <Component {...pageProps} setLoader={setLoader} />
          <Footer/>
      </NextIntlProvider>
  )
}

export default MyApp
