import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation, Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import HomePage from "@/pages/HomePage";
import BolecinaPage from "@/pages/BolecinaPage";
import NapredekPage from "@/pages/NapredekPage";
import SamostojnostPage from "@/pages/SamostojnostPage";
import ProgramiPage from "@/pages/ProgramiPage";
import OMeniPage from "@/pages/OMeniPage";
import KontaktPage from "@/pages/KontaktPage";
import NinjaPage from "@/pages/NinjaPage";
import RanchGirlPage from "@/pages/RanchGirlPage";
import NotFoundPage from "@/pages/NotFoundPage";

const TITLES = {
  "/": "Kinesiohealing - Vsaka bolečina pripoveduje zgodbo",
  "/bolecina": "Bolečina - TC Kinesiohealing",
  "/napredek": "Napredek - TC Kinesiohealing",
  "/samostojnost": "Samostojnost - TC Kinesiohealing",
  "/shop-2": "Shop - TC Kinesiohealing",
  "/omeni": "O meni - TC Kinesiohealing",
  "/kontakt": "Kontakt - TC Kinesiohealing",
  "/the-ninja-movement-experience": "The Ninja Movement Experience - TC Kinesiohealing",
  "/ranchgirl-semi-privat-trening-skupnost": "RanchGirl semi-privat trening skupnost - TC Kinesiohealing",
};

const Layout = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const clean = pathname.replace(/\/+$/, "") || "/";
    document.title = TITLES[clean] || "TC Kinesiohealing";
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main" className="flex-1"><Outlet /></main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="bolecina" element={<BolecinaPage />} />
          <Route path="napredek" element={<NapredekPage />} />
          <Route path="samostojnost" element={<SamostojnostPage />} />
          <Route path="shop-2" element={<ProgramiPage />} />
          <Route path="omeni" element={<OMeniPage />} />
          <Route path="kontakt" element={<KontaktPage />} />
          <Route path="the-ninja-movement-experience" element={<NinjaPage />} />
          <Route path="ranchgirl-semi-privat-trening-skupnost" element={<RanchGirlPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster position="top-center" richColors />
    </BrowserRouter>
  );
}

export default App;
