import { ReactNode } from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="pt-15">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
