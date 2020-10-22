import React from 'react'

import Header from "../components/Header/Header";
import '../../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
      <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono" rel="stylesheet"/>
                <title>Fredda</title>
            </Head>
            <Header />
            <Component {...pageProps} />
      </>
  )
}

export default MyApp
