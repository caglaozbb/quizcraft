import { Roboto } from 'next/font/google'
import Head from 'next/head';


import '../../styles/globals.css'
import '../../styles/reset.css'


import Header from '../../components/header';
import Footer from '../../components/footer';

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
