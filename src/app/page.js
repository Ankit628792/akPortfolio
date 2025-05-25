'use client'

import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MyValues from "@/components/MyValues";
import Navbar from "@/components/Navbar";
// import Projects from "@/components/Projects";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [])
  return (
    <>
      <Navbar />
      <Header />
      {/* <Projects /> */}
      <About />
      <Hero />
      <Experience />
      <MyValues />
      <Footer />
    </>
  );
}
