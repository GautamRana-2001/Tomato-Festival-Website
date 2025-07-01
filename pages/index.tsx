import Head from "next/head";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Features from "../components/Features";
import Tickets from "../components/Tickets";
import Collaboration from "../components/Collaboration";
import  Faqs from "../components/Faqs";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>La Tomatina Fest India 2025 - Pune Edition</title>
      </Head>
      <main className="bg-red-50 text-gray-800">
        <Header />
        <HeroSection />
        <AboutSection />
        <Features />
        <Gallery/>
        <Tickets />
        <Faqs/>
        <Collaboration />
        <Footer/>
       
       
      </main>
    </>
  );
}
