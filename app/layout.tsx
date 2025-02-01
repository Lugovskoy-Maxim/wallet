import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
import CookieNotificationBanner from "@/components/CookieNotificationBanner/CookieNotificationBanner";
import VerifyingUserRightsForPath from "@/helpers/VerifyingUserRightsForPath";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = false;

  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <VerifyingUserRightsForPath user={user}>
          <main>{children}</main>
          <CookieNotificationBanner />
        </VerifyingUserRightsForPath>
      </body>
    </html>
  );
}
