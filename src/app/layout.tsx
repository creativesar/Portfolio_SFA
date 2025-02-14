"use client";

import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showWebsite, setShowWebsite] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShowWebsite(localStorage.getItem("showWebsite") === "true");
    }
  }, []);

  const handleCardClick = () => {
    localStorage.setItem("showWebsite", "true");
    setShowWebsite(true);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        ) : (
          <>
            <NavBar />
            {children}
            <Footer />
          </>
        )
      </body>
    </html>
  );
}
