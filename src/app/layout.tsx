import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import "@/styles/layout.scss";
import "@/styles/colors.scss";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Benrogo",
    default: "Home | Benrogo"
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
      <body className={sourceCodePro.variable}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
