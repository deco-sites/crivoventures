import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  /** @description add a text similar to the content of the link's URL in the Header without '#'. */
  id?: string;
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
  const { id, title, logo } = props;

  return (
    <div
      class="max-w-[1200px] mx-auto pb-[6.6vmax] relative lg:pt-[101.766px] pt-[145.721px] px-[20px] md:mb-[25.79px]"
      id={id}
    >
      <h3 class="text-[#d1734c] md:text-[33px] text-[24.4909px] font-bold mb-[39.61px] pl-[20px]">
        {title}
      </h3>
      <div class="grid md:grid-cols-4 grid-cols-2 items-center md:gap-y-[40px] md:gap-x-[100px] md:pl-[20px]">
        {logo?.map((item) => (
          <a href={item.url} class="md:h-full h-[131.948px] flex items-center duration-300 ease-in hover:scale-110">
            <figure class="md:w-auto w-full">
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
