import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

import Providers from "@/Components/provider";

import Layout from "@/Components/Conteiner/LayoutContainer";
import RecoilWrap from "@/Components/recoil";

const inter = Inter({ subsets: ["latin"] });

// export const notoSansKr = Noto_Sans_KR({
//   subsets: ["latin"],
//   weight: ["100", "400", "700", "900"],
// });

export const metadata: Metadata = {
  title: "pinterest",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilWrap>
          <Providers>
            <Layout> {children}</Layout>
          </Providers>
        </RecoilWrap>
      </body>
    </html>
  );
}
