import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  title?: string;
  logo?: Logo[];
}

export interface Logo {
  image: LiveImage;
  width: number;
  height?: number;
  label?: string;
  url?: string;
}

export default function OurPortfolio(props: Props) {
  const { title, logo } = props;

  return (
    <div class="max-w-[1200px] mx-auto py-[6.6vmax] relative lg:pt-[101.766px] pt-[145.721px] px-[20px]">
      <h3 class="text-[#d1734c] md:text-[33px] text-[24.4909px] font-bold mb-[39.61px] pl-[20px]">
        {title}
      </h3>
      <div class="grid md:grid-cols-4 grid-cols-2 items-center md:gap-y-[40px] md:gap-x-[100px] md:pl-[20px]">
        {logo?.map((item) => (
          <a href={item.url} class="md:h-full h-[131.948px] flex items-center">
            <figure>
              <Image
                src={item?.image}
                class="mx-auto"
                alt={item.label}
                width={item.width}
                height={item.height}
              />
            </figure>
          </a>
        ))}
      </div>
    </div>
  );
}
