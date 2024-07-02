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
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.quizcraft.quest" />
        <meta property="og:title" content="Quizcraft" />
        <meta property="og:description" content="A Fun and Magical Learning Adventure" />
        <meta property="og:image" content="https://www.quizcraft.quest/_next/image?url=%2Fwitch-hat.png&w=256&q=75" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Quizcraft" />
        <meta property="twitter:description" content="A Fun and Magical Learning Adventure" />
        <meta property="twitter:image" content="https://www.quizcraft.quest/_next/image?url=%2Fwitch-hat.png&w=256&q=75" />

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
