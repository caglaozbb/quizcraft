import { Roboto } from 'next/font/google'

import '../../styles/globals.css'
import '../../styles/reset.css'


import Header from '../../components/header';
import Footer from '../../components/footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
});


export const metadata = {
  title: "Quizcraft",
  description: "A Fun and Magical Learning Adventure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className='container'>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
