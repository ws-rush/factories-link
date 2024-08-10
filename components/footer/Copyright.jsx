import { Container } from "@/components/ui/atoms/Container";
import Link from "next/link";

export function Copyright() {
  return (
    <div className="bg-[#2a2a2a]">
      <Container>
        <div className="flex md:gap-12 flex-col items-center py-6 md:flex-row md:justify-between font-semibold text-gray-500">
          <p className="text-sm text-white md:mt-0 md:mr-auto bg-[#2a2a2a]">
            &copy; Factorys link Co.,Ltd. All Rights Reserved.
          </p>
          <Link href="/">Terms</Link>
          <Link href="/">Privacy</Link>
        </div>
      </Container>
    </div>
  );
}
