import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
// import type { HTML } from "deco-sites/std/components/types.ts";
import { HTMLWidget as HTML } from "apps/admin/widgets.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  logo: {
    src: LiveImage;
    width: number;
    height: number;
    label?: string;
  };
  image: {
    src?: LiveImage;
    width: number;
    height: number;
    label?: string;
  };
//   details: HTML;
//   about: HTML;
  newDetails: {
    companyInfo: string,
    founders: string,
    websiteLink: {
        link: string,
        external?: boolean
    },
    yearInvestment: string
  },
  newAbout: {
    title: string,
    content: HTML,
  }
  link: {
    href?: string;
    label?: string;
  };
}

export default function newAbout(props: Props) {
  const { logo, image, link } = props;
  const { newDetails, newAbout } = props;
  return (
    <div class="max-w-[1098.69px] mx-auto flex flex-col pt-[94.73px]">
      <div class="flex flex-col lg:mt-[50px] md:mt-[105px] mt-[30px]">
        <div class="flex md:flex-row flex-col md:justify-between pb-[50px] md:gap-x-[50px]">
          <div class="flex flex-col md:w-1/2 lg:px-0 md:pl-[50px] px-[20px] justify-around">
            <figure>
              <Image
                src={logo.src}
                class="md-max object-contain"
                width={logo.width}
                height={logo.height}
                alt={logo.label}
              />
            </figure>
            <div class="md:text-[18px] text-[#174b28] text-[15.7691px] md:pt-[30px] pt-[40px] md:pb-0 pb-[20px] leading-[1.8em] underline-offset-[0.2em] gap-[15px] flex flex-col">
                <p>
                    <strong>
                        {newDetails.companyInfo}
                    </strong>
                </p>
                <p>
                    <strong>Founders: </strong>{newDetails.founders}
                </p>
                <p>
                    <strong>website: </strong><a
                    class="text-[#d1734c]" 
                    target={`${newDetails.websiteLink.external ? "_blank" : "_self"}`}
                    href={newDetails.websiteLink.link}>
                        {newDetails.websiteLink.link}
                    </a>
                </p>
                <p>
                    <strong>Year of Investment: </strong>{newDetails.yearInvestment}
                </p>
            </div>
          </div>
          <figure
            class={`md:w-1/2 md:mb-0 lg:px-0 md:pr-[50px] px-0 ${
              !image?.src && "lg:h-[578px]"
            }`}
          >
            {image?.src && (
              <Image
                src={image?.src || ""}
                class="object-cover w-full h-full"
                width={image.width}
                height={image.height}
                alt={image.label}
              />
            )}
          </figure>
        </div>
        <hr class="bg-[#174b28] h-[4px] my-[9px] lg:mx-0 md:mx-[50px] mx-[20px]" />
      </div>
      <div class="lg:mx-0 md:mx-[50px] mx-[20px] pt-[20px] mb-[20px]">
        <a
          href={link?.href}
          class="font-bold md:text-[18px] text-[16.5891px] text-[#d1734c] underline underline-offset-[0.2em]"
        >
          {link?.label}
        </a>
        <div class="text-[#174b28] md:text-[18px] text-[15.7691px] py-[30px] text-justify">
            <p>
                <strong>
                    {newAbout.title}
                </strong>
            </p>
            <div dangerouslySetInnerHTML={{__html: newAbout.content ?? "teste"}}/>
        </div>
        
        <hr class="bg-[#174b28] h-[4px] my-[9px]" />
        <a
          href={link?.href}
          class="font-bold md:text-[24px] text-[17.3073px] text-[#d1734c] underline underline-offset-[0.2em] pt-[30px]"
        >
          {link?.label}
        </a>
      </div>
    </div>
  );
}
