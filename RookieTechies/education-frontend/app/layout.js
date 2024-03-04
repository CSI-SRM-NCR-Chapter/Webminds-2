import { Aladin } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/providers/Providers";
import Navbar from "./components/home/nav/Navbar";
import Footer from "./components/home/nav/Footer";
import { AuthContextProvider } from "./context/AuthContext";

const aladin = Aladin({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Education",
  description: "Keep your education up to date with the latest courses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={aladin.className}>
        <Providers>
          <AuthContextProvider>
            <Navbar />
            {children}
            <Footer />
          </AuthContextProvider>
        </Providers>
      </body>
    </html>
  );
}
