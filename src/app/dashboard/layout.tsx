import type { Metadata } from "next";
import { Work_Sans as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import Providers from "./providers"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "LenderSqr",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body   
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  );
}
