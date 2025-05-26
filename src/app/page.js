'use client'

import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MyProjects from "@/components/MyProjects";
import MyValues from "@/components/MyValues";
import Navbar from "@/components/Navbar";
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
      <About />
      <Hero />
      <MyProjects length={6} />
      <Experience />
      <MyValues />
      <Footer />
    </>
  );
}
