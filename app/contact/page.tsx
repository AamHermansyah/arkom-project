"use client"

import Contact from "@/components/Contact";
import Image from "next/image";
import { motion } from 'framer-motion';

function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="relative w-full min-h-screen">
        <Image src="/Tiketback.png" alt="latar1" fill={true} objectFit="cover" />

        <div className="w-full absolute inset-0 flex items-center justify-center">
          <div className="w-full">
            <Contact isPage={true} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactPage;
