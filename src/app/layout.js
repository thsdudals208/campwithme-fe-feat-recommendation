import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

export const metadata = {
  title: "CampWithMe",
  description: "Camping community site",
}

export default function RootLayout({ children }) {
  return (
    // lang='ko': 페이지의 기본 언어 한국어 설정
    <html lang='ko'>
      <body className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-grow w-full flex justify-center bg-[#FDFAF8]'>
          <div className='max-w-1200 w-full h-full'>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
