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
        <body className={`text-[14px] border-white flex justify-center leading-[21px] font-medium ${inter.className}`}>
          <link rel="icon" href="/favicon.svg" sizes="any" />
          <div className="w-full max-w-[1440px] flex flex-col min-h-screen">
            <SocialLinkBar />
            <HeaderBar />
            <div className="flex-grow">
              {children}
            </div>
            <FooterBar />
          </div>
          <div id="modal-container"></div>
        </body>
      </html>
    </SessionWrapper>
  );
}
