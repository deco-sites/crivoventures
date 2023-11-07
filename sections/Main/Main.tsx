import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /** @format textarea */
  title: string;
  image: LiveImage;
  alt: string;
}

export default function Main(props: Props) {
  const { title, image, alt } = props;
  return (
    <div class="max-w-[1200px] mx-auto flex md:flex-row flex-col md:justify-between items-center pb-[3.3vmax] lg:pt-[101.766px] pt-[145.721px] z-0 md:pl-[40px]">
      <h3 class="text-[#174b28] md:text-[33px] text-[25.8327px] font-bold md:max-w-[342.15px] md:px-0 px-[17.13%] md:leading-[43.9824px] leading-[26.4331px]">
        {title}
      </h3>
      <figure>
        <Image
          src={image}
          class="md:max-w-[543.95px] w-full"
          width={1080}
          height={1080}
          alt={alt}
          loading="eager"
        />
      </figure>
    </div>
  );
}
