"use client"

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useRef, useState } from 'react';
import { User } from "@/index.types";
import { IoTicketOutline } from "react-icons/io5";

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const navHambRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleEventNavbar = () => {
      navbarRef.current?.classList.toggle('bg-white', window.scrollY > 0);
      navHambRef.current?.classList.toggle('invert-0', window.scrollY > 0);
    }

    window.addEventListener('scroll', handleEventNavbar)

    return () => {
      window.removeEventListener('scroll', handleEventNavbar)
    }
  }, []);

  useEffect(() => {
    const userStringify = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (userStringify && token) setUser(JSON.parse(userStringify));
  }, []);

  return (
    <nav ref={navbarRef} className="fixed w-full flexBetween px-10 xl:px-20 z-30 py-5 transition">
      <Link href="/" className="text-xl font-bold text-green-50 -mt-2">
        <Image src="/logo-1.png" alt="logo1" width={150} height={150} />
      </Link>

      <ul className="hidden h-full gap-4 xl:gap-10 lg:flex">
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

      {user === null && (
        <div className="lg:flexCenter hidden">
          <Link href="/login">
            <Button
              type="button"
              title="Login"
              icon="/user.svg"
              variant="px-6 py-3 text-white"
            />
          </Link>
        </div>
      )}

      {user && (
        <div className="lg:flexCenter gap-4 hidden">
          <Link href="/notification">
            <button className="p-2.5 w-[50px] rounded-full aspect-square bg-white flexCenter">
              <IoTicketOutline fontSize={28} />
            </button>
          </Link>
          <Link href="/profile">
            <button className="relative w-[50px] rounded-full aspect-square bg-white overflow-hidden">
              <Image
                src={user.imageUrl}
                alt={user.name}
                fill={true}
                className="object-cover"
              />
            </button>
          </Link>
        </div>
      )}

      <Image
        ref={navHambRef}
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden invert rounded"
      />
    </nav>
  );
};

export default Navbar;
