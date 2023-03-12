import "../styles/globals.css"
import { Manrope } from "@next/font/google";
import Footer from "../components/Footer";

const manrope = Manrope({
  variable: "--manrope-font",
  weight: ['200', '400', '500', '600', '700'],
  subsets: ['cyrillic'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru" >
      <head />
      <body className={` ${manrope.variable} bg-slate-50`}>{children}</body>
      <Footer/>
    </html>
  )
}
