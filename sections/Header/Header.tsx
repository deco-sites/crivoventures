import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useState } from "preact/hooks";

export interface Props {
  linkLogo?: string;
  logo: LiveImage;
  alt?: string;
  links?: Link[];
}

export interface Link {
  label?: string;
  url?: string;
}

export default function Header(props: Props) {
  const { linkLogo, logo, alt, links } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header class="flex items-center justify-between lg:px-[2vw] lg:py-[1vw] p-[6vw] bg-white fixed w-full">
      <a href={linkLogo} class="relative z-10">
        <figure>
          <Image src={logo || ""} width={139.84} height={72.99} alt={alt} />
        </figure>
      </a>
      <div class="pl-[11.521px] w-full flex lg:flex-row flex-row-reverse lg:justify-end">
        <nav
          class={`lg:flex-row flex-col lg:justify-end lg:gap-[40.3242px] lg:pt-0 pt-[89.4219px] lg:relative absolute ${
            menuOpen
              ? "flex bg-white h-screen left-0 w-full px-[2vw] justify-center"
              : "lg:flex hidden items-center"
          }`}
        >
          {links?.map((link) => (
            <a
              href={link.url}
              class={`text-[#174b28] lg:text-[18px] text-[26px] lg:m-0 mx-[5vw] my-[1.3vw] font-medium leading-8 py-[1.8px] relative left-0 ${
                menuOpen ? "leading-[26px]" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          onClick={toggleMenu}
          class="lg:hidden lg:pointer-events-none relative z-10 py-1 px-[6px]"
        >
          <div class="flex flex-col justify-around w-[34.99px] h-[22px] border-0 focus:outline-none focus:border-none cursor-pointer xl:hidden">
            <span
              class={`block h-[2px] rounded bg-[#174b28] mt-[2px] animation-hamburger ${
                menuOpen
                  ? "rotate-45 translate-y-1.5 mt-[3px] w-[26px]"
                  : "w-[34.99px]"
              }`}
            >
            </span>
            <span
              class={`block h-[2px] rounded bg-[#174b28] mb-[2px] animation-hamburger ${
                menuOpen ? " -rotate-45 mb-[7px] w-[26px]" : "w-[34.99px]"
              }`}
            >
            </span>
          </div>
        </button>
      </div>
    </header>
  );
}
