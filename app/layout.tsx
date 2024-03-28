import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import SessionWrapper from "@/components/SessionWrapper";
import SocialLinkBar from "@/layout/SocialLinkBar";
import HeaderBar from "@/layout/Header";
import FooterBar from "@/layout/Footer";

//default font-14px, weight 500, family-poppin
const inter = Poppins({ 
  weight: ['500'],
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={`text-[14px] border-white flex justify-center ${inter.className}`}>
          <div className="w-full max-w-[1440px]">
            <SocialLinkBar />
            <HeaderBar />
            {children}
            <FooterBar />
          </div>
        </body>
      </html>
    </SessionWrapper>
  );
}
