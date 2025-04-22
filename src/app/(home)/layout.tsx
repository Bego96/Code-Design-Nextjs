import type { Metadata } from "next";
import { Inter,  } from "next/font/google";
import localfont from "next/font/local";
import "@/app/globals.css";
import { HomeSidebar } from "./components/homeNav/homeSidebar";
import { HomeNav } from "./components/homeNav/homeNav";
import Footer from "./components/footer/footer";
import '../globals.css'

const bankGothic = localfont({
  src: [{
    path: '../../../public/fonts/BankGothic Md BT.ttf',
    weight: "400"
  }],
  variable: "--font-bankgothic-md-bt"
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Design Tuzla",
  description: "Code Design d.o.o. Arhitektonska riješenja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 

  return (
    <html lang="en" className={`${bankGothic.variable} scroll-smooth`}>
      <body className="relative bg-[#FAFAFA]">
        
      <HomeSidebar />
      <HomeNav />
            
            {children}
            
            <Footer />
        
      </body>
    </html>
  );
}
