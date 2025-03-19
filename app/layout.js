"use client"
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Aos from "aos";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
