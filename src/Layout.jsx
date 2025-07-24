import React from "react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Team from "./pages/Team";
import ContactUs from "./pages/ContactUs";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar (scrollable independently if needed) */}
      <SideBar />

      {/* Main content area */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Fixed/sticky header */}
        <Header />

        {/* Main scrollable page content */}
        <main className="pt-20 px-4 md:px-8 space-y-24">
          <section id="Home" className="scroll-mt-24">
            <Home />
          </section>

          <section id="Services" className="scroll-mt-24">
            <Services />
          </section>

          <section id="Team" className="scroll-mt-24">
            <Team />
          </section>

          <section id="ContactUs" className="scroll-mt-24">
            <ContactUs />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;