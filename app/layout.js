
import { Lato } from "next/font/google";
import "./globals.css";
import I18nProvider from "./I18nProvider"; // Adjust path if needed

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "Ancestro Solar - Clean Energy Solutions",
  description: "Powering the future with clean, sustainable solar energy solutions for your home and business.",
};

export default function RootLayout({ children }) {
  // Default language (could be dynamic, e.g., from user cookies or server logic)
  const initialLanguage = "es";

  return (
    <html lang={initialLanguage}>
      <body className={`${lato.variable} antialiased font-lato`}>
        <I18nProvider initialLanguage={initialLanguage}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}