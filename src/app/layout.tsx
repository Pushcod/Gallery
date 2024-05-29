import { Inter,Italiana } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const inta = Italiana({
  subsets: ["latin"],
  weight: ['400'],
  variable:"--font-italiana"
});

export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="ru">
      <body className={inta.className + ' w-full bg-[#1A1A1A] text-base'}>
        <div className="__next">
          <div className="w-full p-5 flex">
            <div className="h-full sticky top-2 left-0">

            </div>
            <div className="w-full px-5">
              <Header/>
              <main id='main' className="w-full" >
                <div id="main-content" className="w-fill">
                  {children}
                </div>
              </main>
              
            </div>
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}