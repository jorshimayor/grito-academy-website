import Image from "next/image";

import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Academy from "../../public/academy";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <Academy />
      <Footer />
    </div>
  );
}
