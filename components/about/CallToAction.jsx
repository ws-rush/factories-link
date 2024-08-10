import { Container } from "@/components/ui/atoms/Container";
import { Button } from "@/components/ui/atoms/Button";
import Image from "next/image";

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden h-[302px] pt-16 bg-[url('/illustrators/call-to-action.svg')]"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2"></div>
      <Container className="px-16">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-4xl font-bold text-orange-600">
              Ready to Get Started?
            </h2>
            <p className="mb-4 text-lg font-semibold text-[#2F2B3D]/70 ">
              Start your project with a 14-day free trial
            </p>
            <Button className="bg-orange-600 font-bold text-lg shadow-md">
              Get Started
            </Button>
          </div>
          <Image
            width={236}
            height={464}
            src="/illustrators/g166.png"
            className="w-[480px] aspect-video"
            alt="CTO"
          />
        </div>
      </Container>
    </section>
  );
}
