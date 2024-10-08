"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { RadixIconsChevronDown } from "@/components/ui/atoms/Icons";

export function NavLinks({ items }) {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return items?.map(({ label, href, children }, index) => (
    <Link
      key={label}
      href={href || "#"}
      className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-zinc-800"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative flex gap-1 items-center text-white font-semibold">
        {label} {children && <RadixIconsChevronDown />}
      </span>
    </Link>
  ));
}
