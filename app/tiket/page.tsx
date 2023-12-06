"use client"

import BeliTiket from "@/components/Belitiket";
import { motion } from 'framer-motion';

function page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <BeliTiket />
    </motion.div>
  );
}

export default page