import { Roboto } from 'next/font/google'
import Head from 'next/head';


import '../../styles/globals.css'
import '../../styles/reset.css'


import Header from '../components/header';
import Footer from '../components/footer';

export const runtime = "edge"
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '700']
});


export const metadata = {
  title: "Quizcraft",
  description: "A Fun and Magical Learning Adventure",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Quizcraft" />
        <meta property="og:description" content="A Fun and Magical Learning Adventure" />
        <meta property="og:image" content="/boiler.png" />
        <meta property="og:url" content="https://quizcraft.quest/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <html lang="en" className={roboto.className}>
        <body>
          <Header />
          <main className='contentWrapper'>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
