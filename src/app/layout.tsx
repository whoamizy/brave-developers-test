"use client";
import { Ubuntu } from "next/font/google";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/globalStyles";
import "./styles/nullstyle.css";
import { GlobalContextProvider } from "./context/store";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={ubuntu.className}>
      <GlobalStyle />
      <body>
        <Header />
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
