"use client";
import { Ubuntu } from "next/font/google";
import { Metadata } from "next";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/globalStyles";
import "./styles/nullstyle.css";
import { GlobalContextProvider } from "./context/store";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ReactPay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ubuntu.className}>
      <GlobalStyle />
      <body>
        <Header />
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
