import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MobileNav from "../MobileNav/MobileNav";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="pt-[40px] lg:pt-[50px] pb-[90px] lg:pb-0">
        <Outlet />
      </main>

      {/* Hide Footer on Mobile & Tablet */}
      <div className="hidden lg:block">
        <Footer />
      </div>

      <MobileNav />
    </div>
  );
};

export default MainLayout;