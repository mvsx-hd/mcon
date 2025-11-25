import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Authprovider from "@/components/Authprovider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Medcon - Connecting people to nearby Pharmacies",
  description: "A platform where health tips are being shared by medical professionals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <Authprovider>
          <Navbar/>
          {children}
          <Footer/>
        </Authprovider>
      </body>
    </html>
  );
}
