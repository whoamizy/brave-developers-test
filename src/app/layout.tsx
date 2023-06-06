import { Ubuntu } from "next/font/google";
import { Metadata } from "next";
import TheHeader from "./components/TheHeader";
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
        <TheHeader />
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
