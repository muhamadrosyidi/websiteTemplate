import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBootstrap from "./AddBootstrap";

import StyledComponentsRegistry from './lib/registry.tsx';
import { Josefin_Sans } from "next/font/google";

import Nav from '../component/nav/nav';
import Footer from '../component/footer/footer';

export const metadata = {
  title: "GO CHECK CAR",
  description : "car inspection"
};

const inter = Josefin_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={inter.className}>
            <AddBootstrap />
            <Nav/>
              {children}
            <Footer/>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
