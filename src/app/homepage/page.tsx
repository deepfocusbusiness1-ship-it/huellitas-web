"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ProductsSection from "./components/ProductsSection";
import LocationSection from "./components/LocationSection";
import CtaBanner from "./components/CtaBanner";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Homepage() {
  return (
    <main
      style={{
        fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif",
        background: "#f7f5f0",
        overflowX: "hidden",
      }}
    >
      <Header />
      <HeroSection />
      <StatsSection />
      <ProductsSection />
      <LocationSection />
      <CtaBanner />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}