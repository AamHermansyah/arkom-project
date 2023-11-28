"use client"

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useRef } from 'react';

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const navbar = navbarRef.current
    if (navbar) {
      const handleEventNavbar = () => {
        navbar.classList.toggle('bg-white', window.scrollY > 0)
      }

      window.addEventListener('scroll', handleEventNavbar)

      return () => {
        window.removeEventListener('scroll', handleEventNavbar)
      }
    }
  }, []);

  return (
    <nav ref={navbarRef} className="fixed w-full flexBetween padding-container z-30 py-5 transition">
      <Link href="/" className="text-xl font-bold text-green-50 -mt-2">
        <Image src="/logo-1.png" alt="logo1" width={150} height={150} />
      </Link>

      <ul className="hidden h-full gap-10 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="bg-white text-black font-bold flexCenter cursor-pointer rounded-full px-4 py-2 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <a href="/login">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="px-6 py-3 text-white"
          />
        </a>
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
