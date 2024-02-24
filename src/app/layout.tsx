import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";

import { ApolloWrapper } from "./ApolloWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRM Administración de Clientes",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLogged = true;

  return (
    <html lang="en">
      <body className={inter.className}>
        {isLogged ? (
          <div className="bg-gray-200 min-h-screen">
            <div className="flex min-h-screen">
              <Sidebar />
              <main className="sm:w-2/3 xl:w-4/5 sm:min-h-screen p-5">
                <ApolloWrapper>{children}</ApolloWrapper>
              </main>
            </div>
          </div>
        ) : (
          <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
            <ApolloWrapper>{children}</ApolloWrapper>
          </div>
        )}
      </body>
    </html>
  );
}
