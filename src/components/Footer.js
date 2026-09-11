import Link from "next/link";
import { SITE } from "@/lib/site";
import { Icon } from "./Icons";
import { Container, Logo } from "./ui";

const SERVICES = [
  ["AI automation & agents", "/#services"],
  ["Custom software", "/#services"],
  ["Mobile app development", "/#services"],
  ["Dedicated & white-label teams", "/#capabilities"],
  ["Search & digital growth", "/#services"],
];

const COMPANY = [
  ["About us", "/#about"],
  ["Our work", "/#work"],
  ["Capabilities", "/#stack"],
  ["FAQ", "/#faq"],
  ["Get a quote", "/#quote"],
];

export default function Footer() {
  return (
    <footer className="bg-hero text-[#9a9ca0]">
      <Container className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14 lg:py-20">
        <div>
          <Logo inverted height={36} className="mb-5" />
          <p className="mb-[18px] max-w-[38ch] text-[15px] leading-[1.7]">
            Terioat Infotech is a UK software engineering and AI automation
            partner working with enterprises and agencies — custom software,
            mobile apps, AI agents and dedicated teams.
          </p>
          <a href={SITE.emailHref} className="text-[15px] text-white transition-colors duration-200 hover:text-cyan-bright">
            {SITE.email}
          </a>
        </div>
        <div>
          <h3 className="mb-[18px] font-mono text-[11px] tracking-[0.16em] text-white uppercase">
            Services
          </h3>
          <ul className="m-0 grid list-none gap-[11px] p-0 text-[15px]">
            {SERVICES.map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="transition-colors duration-200 hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-[18px] font-mono text-[11px] tracking-[0.16em] text-white uppercase">
            Company
          </h3>
          <ul className="m-0 grid list-none gap-[11px] p-0 text-[15px]">
            {COMPANY.map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="transition-colors duration-200 hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-[18px] font-mono text-[11px] tracking-[0.16em] text-white uppercase">
            United Kingdom
          </h3>
          <ul className="m-0 grid list-none gap-3.5 p-0 text-[15px] leading-[1.6]">
            <li className="flex gap-3">
              <Icon name="pin" size={16} className="mt-[3px] shrink-0 text-cyan-bright" />
              <span>
                {SITE.addressLine}
                <br />
                {SITE.city}
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="call" size={16} className="mt-[3px] shrink-0 text-cyan-bright" />
              <a href={SITE.phoneHref} className="text-white transition-colors duration-200 hover:text-cyan-bright">
                {SITE.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" size={16} className="mt-[3px] shrink-0 text-cyan-bright" />
              <a href={SITE.emailHref} className="text-white transition-colors duration-200 hover:text-cyan-bright">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-[#303234]">
        <Container className="flex flex-wrap justify-between gap-x-7 gap-y-2.5 py-5 text-[13.5px]">
          <span>
            © {new Date().getFullYear()} Terioat Infotech. All rights reserved.
            Registered in England &amp; Wales.
          </span>
          <div className="flex flex-wrap gap-x-[22px] gap-y-2.5 whitespace-nowrap">
            <Link href="/#top" className="transition-colors duration-200 hover:text-white">
              Privacy policy
            </Link>
            <Link href="/#top" className="transition-colors duration-200 hover:text-white">
              Terms
            </Link>
            <a
              href="https://www.linkedin.com/"
              rel="noreferrer"
              target="_blank"
              className="transition-colors duration-200 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
