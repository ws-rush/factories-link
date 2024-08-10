import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  RadixIconsChevronUp,
  RadixIconsChevronDown,
  RadixIconsHamburgerMenu,
} from "@/components/ui/atoms/Icons";
import { Popover } from "@headlessui/react";

function MobileNavLink({ label, href, children }) {
  return (
    <Popover.Button
      as={Link}
      className="text-base leading-7 tracking-tight text-gray-700 flex gap-1 items-center justify-between"
      href={href || "#"}
    >
      {label}
      {children && <RadixIconsChevronDown />}
    </Popover.Button>
  );
}

export function MobileNavLinks({ items }) {
  return (
    <Popover className="lg:hidden">
      {({ open }) => (
        <>
          <Popover.Button
            className="inline-flex justify-center rounded-lg text-sm outline-2 outline-offset-2 transition-colors hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
            aria-label="Toggle site navigation"
          >
            {({ open }) =>
              open ? (
                <RadixIconsChevronUp className="w-6 h-6 self-center" />
              ) : (
                <RadixIconsHamburgerMenu className="w-6 h-6" />
              )
            }
          </Popover.Button>
          <AnimatePresence initial={false}>
            {open && (
              <Popover.Overlay>
                <Popover.Overlay
                  static
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                />
                <Popover.Panel
                  static
                  as={motion.div}
                  initial={{ opacity: 0, y: -32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: -32,
                    transition: { duration: 0.2 },
                  }}
                  className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                >
                  <div className="space-y-4">
                    {items?.map((item) => (
                      <MobileNavLink key={item.name} {...item} />
                    ))}
                  </div>
                </Popover.Panel>
              </Popover.Overlay>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  );
}
