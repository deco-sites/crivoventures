import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  logo: {
    src: ImageWidget;
    width: number;
    height: number;
    label?: string;
  };
  image: {
    src: ImageWidget;
    width: number;
    height: number;
    label?: string;
  };
  /** @format html */
  details: string;
  /** @format html */
  about: string;
  link: {
    href?: string;
    label?: string;
  };
}

export default function About(props: Props) {
  const { logo, image, details, about, link } = props;
  return (
    <div class="max-w-[1098.69px] mx-auto flex flex-col pt-[94.73px]">
      <div class="flex flex-col lg:mt-[50px] md:mt-[105px] mt-[30px]">
        <div class="flex md:flex-row flex-col md:justify-between pb-[50px] md:gap-x-[50px]">
          <div class="flex flex-col md:w-1/2 lg:px-0 md:pl-[50px] px-[20px]">
            <figure>
              <Image
                src={logo.src}
                class="md-max object-contain"
                width={logo.width}
                height={logo.height}
                alt={logo.label}
              />
            </figure>
            <div
              class="md:text-[18px] text-[15.7691px] md:pt-[30px] pt-[40px] md:pb-0 pb-[20px] leading-[1.8em] underline-offset-[0.2em] gap-[15px] flex flex-col"
              dangerouslySetInnerHTML={{ __html: details }}
            />
          </div>
          <figure class="md:w-1/2 md:mb-0 lg:px-0 md:pr-[50px] px-0">
            <Image
              src={image.src}
              class="max-h-[320px] object-cover w-full h-full"
              width={image.width}
              height={image.height}
              alt={image.label}
            />
            
          </figure>
        </div>
        <hr class="bg-[#174b28] h-[4px] my-[9px] lg:mx-0 md:mx-[50px] mx-[20px]" />
      </div>
      <div class="lg:px-0 md:px-[50px] px-[20px] pt-[20px]">
        <a
          href={link?.href}
          class="font-bold md:text-[18px] text-[16.5891px] text-[#d1734c] underline underline-offset-[0.2em]"
        >
          {link?.label}
        </a>
        <div
          class="md:text-[18px] text-[15.7691px] py-[30px] text-justify"
          dangerouslySetInnerHTML={{ __html: about }}
        />
        <hr class="bg-[#174b28] h-[4px] my-[9px] lg:mx-0 md:mx-[50px] mx-[20px]" />
        <a
          href={link?.href}
          class="font-bold md:text-[24px] text-[17.3073px] text-[#d1734c] underline underline-offset-[0.2em] pt-[20px] pb-[40px]"
        >
          {link?.label}
        </a>
      </div>
    </div>
  );
}
