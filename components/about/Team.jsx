import Image from "next/image";
import { Container } from "@/components/ui/atoms/Container";
import Sophie from "@/images/team/sophie.png";
import Paul from "@/images/team/paul.png";
import Nannie from "@/images/team/nannie.png";
import Chris from "@/images/team/chris.png";

const team = [
  {
    name: "Sophie Gilbert",
    description: "Project Manager",
    photo: Sophie,
    bg: "bg-[#7367F0]/20",
    border: "border-[#7367F0]/20",
  },
  {
    name: "Paul Miles",
    description: "UI Designer",
    photo: Paul,
    bg: "bg-[#00BAD1]/20",
    border: "border-[#00BAD1]/20",
  },
  {
    name: "Nannie Ford",
    description: "Development Lead",
    photo: Nannie,
    bg: "bg-[#FF4C51]/20",
    border: "border-[#FF4C51]/20",
  },
  {
    name: "Chris Watkins",
    description: "Marketing Manager",
    photo: Chris,
    bg: "bg-[#28C76F]/20",
    border: "border-[#28C76F]/20",
  },
];

export function Team() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="pt-10 pb-28"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <span className="bg-[#FF9F43]/20 text-orange-600 text-sm rounded-md py-2 px-3">
            Our Great Team
          </span>
          <h2 className="text-3xl font-medium tracking-tight text-gray-900 py-8">
            Get to know us
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-4"
        >
          {team.map((member) => (
            <li
              key={member.name}
              className="text-center grid place-items-center pt-20"
            >
              <div
                className={[
                  "rounded-tr-[20px] rounded-tl-[90px] border p-8 w-full relative",
                  member.bg,
                  member.border,
                ].join(" ")}
              >
                <div className="h-36"></div>

                <Image
                  src={member.photo}
                  className="h-60 w-auto absolute bottom-0"
                  alt={member.name}
                />
              </div>
              <div className="rounded-b-md border-x border-b border-[#2F2B3D]/10 bg-white w-full py-6">
                <h3 className="font-semibold text-gray-900 text-xl">
                  {member.name}
                </h3>
                <p className="text-gray-700/50">{member.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
