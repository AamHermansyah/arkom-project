'use client'

import Contact from "@/components/Contact";
import Why from "@/components/Why";
import About from "@/components/About";
import Hero from "@/components/Hero";

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <Hero />
      <Why />
      <About />
      <Contact />
    </motion.div>
  )
}
