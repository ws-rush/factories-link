import { Container } from "@/components/ui/atoms/Container";
import { Logo } from "../header/Logo";
import Image from "next/image";
import heroImage from "@/images/hero.jpeg";

export function Hero() {
  return (
    <div className="overflow-hidden py-10 font-semibold flex justify-center mx-8">
      <Container>
        <div className="flex w-full flex-row bg-white text-gray-700 shadow-lg">
          <div className="relative p-6 bg-white rounded-tl-md bg-clip-border">
            <h6 className="mb-4 block text-center">
              <Logo type="inline" />
            </h6>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Who we are ?
            </h4>
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              All plans include 40+ advanced tools and features to boost your
              product. Choose the best plan to fit your needs.All plans include
              40+ advanced tools and features to boost your product. Choose the
              best plan to fit your needs.All plans include 40+ advanced tools
              and features to boost your product. Choose the best plan to fit
              your needs.All plans include 40+ advanced tools and features to
              boost your product. Choose the best plan to fit your needs.All
              plans include 40+ advanced tools and features to boost your
              product. Choose the best plan to fit your needs.All plans include
              40+ advanced tools and features to boost your product.
            </p>
          </div>
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-tr-md bg-white bg-clip-border text-gray-700">
            <Image
              src={heroImage}
              alt="truck"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
