import type { Metadata } from "next";
import "../css/globals.css";
import BaseLayout from "../layout/baseLayout";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.ttf",
  display: "swap",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "PORTFOLIO",
  description: "가치 있는 문제를 코드로 해결하는 개발자 포트폴리오",
  icons: {
    icon: "/WOONIVERSE.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} `}>
      <body className={`${pretendard.className} bg-black`}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
