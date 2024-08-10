"use client";

import Link from "next/link";

import { Container } from "@/components/ui/atoms/Container";
import { Logo } from "@/components/header/Logo";
import { NavLinks } from "@/components/header/NavLinks";
import { NavControls } from "./NavControls";
import { MobileNavLinks } from "@/components/header/MobileNavLinks";

const navLinks = [
  {
    label: "Solutions",
    href: "#solutions",
  },
  {
    label: "Market Place",
    href: "#market-place",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Company",
    children: [],
  },
];

export function Header() {
  return (
    <header className="relative">
      <nav>
        <Container className="flex justify-between">
          <div className="flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo dark={true} />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks items={navLinks} />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="lg:hidden">
              {/* <MobileNavLinks items={navLinks} /> */}
            </div>
            <NavControls />
          </div>
        </Container>
      </nav>
    </header>
  );
}
