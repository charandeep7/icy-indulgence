import { Providers } from "./provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "./(components)/Navbar/page";
import Footer from "./(components)/Footer/page";
import { ReduxProviders } from "./redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Icy Indulgence",
  description:
    "Savor Cool Moments: IcyIndulgence - Your Ultimate Frozen Delight!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProviders>
          <Providers>
            <Toaster />
            <Header />
            {children}
            <Footer />
          </Providers>
        </ReduxProviders>
      </body>
    </html>
  );
}
