import { HomeView } from '@/components/organisms/home/home/HomeView'
import Head from 'next/head'


export default function HomePage() {
  return (
    <>
      <Head>
        <title>Metal : Samgreen Corp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Discover Metal's smart business cards. Designed with laser and NFC technology, we offer a modern and innovative way to present yourself, impress your contacts and customers with our state-of-the-art cards!" />

        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://metatags.io/" /> */}
        <meta property="og:title" content="Metal Business Card" />
        <meta property="og:description" content="Discover Metal's smart business cards. Designed with laser and NFC technology, we offer a modern and innovative way to present yourself, impress your contacts and customers with our state-of-the-art cards!" />
        <meta property="og:image" content="https://i.ibb.co/W2Cjkwf/Captura-desde-2023-04-27-09-53-33.png" />
        <meta name="keywords" content="smart business cards, smart business cards, smart business cards, laser technology, NFC technology, modern business cards, innovative business cards" />
        <meta name="author" content="SamgreenCorp" />
        <meta name="robots" content="index, follow"></meta>
        {/* <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate" />
        <meta property="twitter:description" content="Discover Metal's smart business cards. Designed with laser and NFC technology, we offer a modern and innovative way to present yourself, impress your contacts and customers with our state-of-the-art cards!" />
        <meta property="twitter:image" content="https://i.ibb.co/W2Cjkwf/Captura-desde-2023-04-27-09-53-33.png" /> */}

      </Head>
      <HomeView />


    </>
  )
}
