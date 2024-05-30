import { Inter,Italiana } from "next/font/google";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";
import "./globals.css";


export const metadata: Metadata = {
  title: "StudentSave",
  description: "StudentSave - маркетплейс с бесплатными архивами проектов, дизайнов и т.д.",
};

const inta = Italiana({
  subsets: ["latin"],
  weight: ['400'],
  variable:"--font-italiana"
});

<<<<<<< HEAD
export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
=======
export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {
  
>>>>>>> 3af13ae55dc4fc98e314704aed2d4edfe26f81e1
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