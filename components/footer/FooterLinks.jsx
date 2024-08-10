import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/atoms/Button";
import { Container } from "@/components/ui/atoms/Container";
import { TextField } from "@/components/ui/atoms/Fields";
import { Logo } from "@/components/header/Logo";
import { InfoCard } from "@/components/footer/InfoCard";
import { NavLinks } from "@/components/header/NavLinks";

export function FooterLinks() {
  return (
    <div className="bg-black">
      <Container>
        <div className="pt-12 pb-8">
          <Logo large={true} dark={true} />
        </div>
        <div className="flex text-white px-4 pb-12">
          <InfoCard title="Quick Links">
            <Link href="/">Support Policy Page</Link>
            <Link href="/">Return Policy Page</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Privacy Policy Page</Link>
            <Link href="/">Seller Policy</Link>
            <Link href="/">Term Conditions Page</Link>
          </InfoCard>
          <InfoCard title="Contacts" className="gap-4">
            <li>
              <strong className="block text-white/80 font-normal">
                Address
              </strong>
              <span>King Fahd Road, Olaya District,</span>
              <br />
              <span>P.O. Box 75169, Riyadh 11578, K.S.A</span>
            </li>
            <li>
              <strong className="block text-white/80 font-normal">Phone</strong>
              <span>123456789</span>
            </li>
            <li>
              <strong className="block text-white/80 font-normal">Email</strong>
              <span>info@factorylinks.com</span>
            </li>
          </InfoCard>
          <InfoCard title="My Account">
            <Link href="/">Login</Link>
            <Link href="/">Trade Deals</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Order History</Link>
            <Link href="/">My Wishlist</Link>
            <Link href="/">Track Order</Link>
            <Link href="/">Be an affiliate partner</Link>
          </InfoCard>
          <InfoCard title="Seller Zone">
            <li className="flex gap-2">
              <span>Become A Seller</span>
              <Link href="/" className="font-semibold text-orange-600">
                Apply Now
              </Link>
            </li>
            <Link href="/">Login to Seller Panel</Link>
            <li>
              <strong className="block text-white/80 font-normal mt-4">
                sales agent
              </strong>
              <Link href="/">Login to sales agent</Link>
            </li>
          </InfoCard>
          <InfoCard title="Subscribe">
            <form className="flex flex-col gap-2">
              <TextField
                id="email"
                label="Subscribe to our newsletter for regular updates about Offers, Producs & more."
                className="text-white bg-transparent"
                rootClassName="max-w-64"
                labelClassName="text-white text-xs"
                placeholder="Your Email Address"
              ></TextField>
              <Button className="bg-orange-600 flex-none">Subscribe</Button>
            </form>
            <li>
              <strong className="block text-white/60 mt-4 mb-2">
                Follow Us
              </strong>
              <ol className="flex gap-3">
                <Link href="/">
                  <Image
                    width={28}
                    height={28}
                    src="/facebook.png"
                    alt="facebook"
                  />
                </Link>
                <Link href="/">
                  <Image width={28} height={28} src="/x.png" alt="X" />
                </Link>
                <Link href="/">
                  <Image
                    width={28}
                    height={28}
                    src="/insta.png"
                    alt="instagram"
                  />
                </Link>
                <Link href="/">
                  <Image
                    width={28}
                    height={28}
                    src="/youtube.png"
                    alt="youtube"
                  />
                </Link>
                <Link href="/">
                  <Image
                    width={28}
                    height={28}
                    src="/linked-in.png"
                    alt="linked in"
                  />
                </Link>
              </ol>
            </li>
          </InfoCard>
        </div>
      </Container>
    </div>
  );
}
