import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CWT Porfolio",
  description: "Majo Apps",
};

export default function RootLayout({ children,showNavbar }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {showNavbar && <Navbar />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
