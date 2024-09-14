import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "ANNUR OFFICIAL",
};

export default function RootLayout({ children }) { 
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="./apple-icon.png" />
        <title>ANNUR OFFICIAL</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
