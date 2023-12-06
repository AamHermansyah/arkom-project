"use client"

import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

function FramerMotionContext({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" key={pathname}>
      {children}
    </AnimatePresence>
  )
}

export default FramerMotionContext