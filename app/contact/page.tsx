import Contact from "@/components/Contact";
import Image from "next/image";
import React from "react";

function ContactPage() {
  return (
    <div className="relative w-full min-h-screen">
      <Image src="/Tiketback.png" alt="latar1" fill={true} objectFit="cover" />

      <div className="w-full absolute inset-0 flex items-center justify-center">
        <div className="w-full">
          <Contact isPage={true} />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
