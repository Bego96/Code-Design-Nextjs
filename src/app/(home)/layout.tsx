import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { HomeSidebar } from "./components/homeNav/homeSidebar";
import { HomeNav } from "./components/homeNav/homeNav";
import Footer from "./components/footer/footer";



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
    <html lang="en">
      <body className="relative bg-[#FAFAFA]">
        
      <HomeSidebar />
      <HomeNav />
            
            {children}
            
            <Footer />
        
      </body>
    </html>
  );
}
