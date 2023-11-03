"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-black h-[87px] fixed top-0 left-0 right-0 z-40">
        <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-2">
          <div>
            <div className="flex items-center justify-between md:py-4 md:block">
              {/* LOGO */}
              <Link href="#home" className="flex items-start  max-sm:pt-4">
                <Image
                  src="/logo.png"
                  className=""
                  width={130}
                  height={87}
                  alt="Grito Logo"
                />
              </Link>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden max-sm:pt-4">
                <button
                  className="p-2 text-gold rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <FaTimes size={30} /> : <FaBars size={30} />}
                </button>
              </div>
            </div>
          </div>

          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-gold md:pt-6 md:px-6  text-center hover:scale-105 hover:text-white">
                  <Link href="#home" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white px-6 md:pt-6 text-center hover:scale-105 hover:text-gold">
                  <Link href="#hire" onClick={() => setNavbar(!navbar)}>
                    Hire Talents
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white md:pt-6 px-6 text-center hover:scale-105 hover:text-gold">
                  <Link href="#academy" onClick={() => setNavbar(!navbar)}>
                    GRITO Academy
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white md:pt-6 text-center md:-mr-5 hover:scale-105 hover:text-gold">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
