import Link from "next/link";
import { Container } from "@/components/ui/atoms/Container";
import { RadixIconsChevronRight } from "@/components/ui/atoms/Icons";

export function Breadcrumb() {
  return (
    <div className="overflow-hidden py-10 text-white text-center font-semibold">
      <Container>
        <div className="relative z-10 mx-auto max-w-2xl lg:max-w-none lg:pt-6">
          <h1 className="text-4xl font-xl tracking-tight pb-6">About us</h1>
          <div className="flex gap-1 items-center justify-center">
            <Link href="/" className="text-white/70">
              Home
            </Link>
            <RadixIconsChevronRight />
            <Link href=".">About us</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
