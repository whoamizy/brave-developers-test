import { Ubuntu } from "next/font/google";
import { Metadata } from "next";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/globalStyles";
import "./styles/nullstyle.css";
import { GlobalContextProvider } from "./context/store";
import StyledComponentsRegistry from "./styles/registry";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic"],
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
    <html lang="ru" className={ubuntu.className}>
      <body>
        <StyledComponentsRegistry>
          <Header />
          <GlobalStyle />
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
