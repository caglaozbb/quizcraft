import { Roboto } from 'next/font/google'


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
  title: 'Quizcraft',
  description: 'A fun quiz app',
  openGraph: {
    title: 'Quizcraft',
    description: 'A fun quiz app',
    url: 'https://quizcraft.quest',
    siteName: 'Quizcraft',
    images: [
      {
        url: 'https://www.quizcraft.quest/_next/image?url=%2Fwitch-hat.png&w=256&q=75', // Must be an absolute URL
        width: 800,
        height: 600,
      },

    ],
    locale: 'en_US',
    type: 'website',
  },
}


export default function RootLayout({ children }) {
  return (
    <>
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
