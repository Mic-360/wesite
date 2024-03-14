import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";

interface Props {}

const Footer: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <footer
      id="footer"
      className="relative bottom-0 h-full w-screen flex flex-col sm:flex-row bg-plume text-white font-normal items-center py-4 md:py-0"
    >
      <div className="w-full pl-4 xl:pl-24 justify-start items-center text-lg flex">
        <Link
          href="#view"
          className="hover:underline underline-offset-4 cursor-pointer decoration-neon"
        >
          Twinverse Technologies © 2022
        </Link>
      </div>
      <div className="w-full flex gap-x-4 justify-evenly uppercase text-sm font-medium px-4">
        <div className="h-32 flex flex-col gap-y-2 justify-center">
          <Link
            className="hover:underline underline-offset-4 decoration-neon"
            href="https://instagram.com/twinversetech/"
            target="_top"
          >
            instagram
          </Link>
          <Link
            className="hover:underline underline-offset-4 decoration-neon"
            href=""
            target="_top"
          >
            discord
          </Link>
        </div>
        <div className="h-32 flex flex-col gap-y-2 justify-center">
          <Link
            className="hover:underline underline-offset-4 decoration-neon"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:underline underline-offset-4 decoration-neon"
            href="/team"
          >
            team
          </Link>
        </div>
        <div className="h-32 flex flex-col gap-y-2 justify-center">
          <Link
            className="hover:underline underline-offset-4 decoration-neon"
            href="https://www.linkedin.com/company/twinversetech/"
            target="_top"
          >
            linkedin
          </Link>
          <Link
            className="hover:underline underline-offset-4 decoration-neon"
            href="/contact-us"
          >
            contact
          </Link>
        </div>
        <div className="h-32 flex flex-col gap-y-2 justify-center">
          <Link
            className="hover:underline underline-offset-4 decoration-neon"
            href=""
          >
            privacy policy
          </Link>
          <Link
            className="hover:underline underline-offset-4 decoration-neon"
            href=""
          >
            t & c
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
