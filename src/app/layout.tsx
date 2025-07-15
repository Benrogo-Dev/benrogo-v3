import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import BasePage from "@/components/BasePage/BasePage";

import "./theme.scss";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Benrogo",
    default: "Home | Benrogo",
  },
  description: "Benrogo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={orbitron.variable}>
        <SessionProvider>
          <BasePage>{children}</BasePage>
        </SessionProvider>
      </body>
    </html>
  );
}
