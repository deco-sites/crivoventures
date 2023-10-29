import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /** @description add a text similar to the content of the link's URL in the Header without '#'. */
  id?: string;
  /** @format html */
  title: string;
  /** @format html */
  description: string;
  accordion?: Content[];
  image: ImageWidget;
  alt?: string;
}

export interface Content {
  label: string;
  /** @format html */
  about: string;
}

export default function CoreValues(props: Props) {
  const { id, title, description, accordion, image, alt } = props;
  return (
    <section
      class="max-w-[1200px] mx-auto md:pl-[40px] md:pr-0 px-[20px] py-[6.6vmax] mt-[25.79px]"
      id={id}
    >
      <div class="flex flex-col">
        <div class="flex flex-col max-w-[443.05px]">
          <div
            class="md:text-[33px] text-[24.3927px] pb-[18.31px]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            class="md:text-[33px] text-[24.3927px] leading-[29.2247px] text-justify mb-[40px] md:leading-[43.9824px]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div class="flex md:flex-row flex-col-reverse justify-between items-center md:gap-x-[112px]">
          <div class="flex flex-col w-full">
            {accordion?.map((item) => {
              return (
                <details class="border-b-[3px] border-solid border-[#174b28]">
                  <summary class="flex justify-between items-center group cursor-pointer py-[30px]">
                    <p class="text-[#174b28] font-bold md:text-[24px] text-[17.3073px]">
                      {item.label}
                    </p>
                    <span class="flex-none bg-[#d1734c] w-[23.99px] h-[2.99px]">
                      <span class="flex-none bg-[#d1734c] open-sign w-[23.99px] h-[2.99px] flex">
                      </span>
                    </span>
                  </summary>
                  <div
                    class="md:text-[18px] text-[15.7691px] py-[30px]"
                    dangerouslySetInnerHTML={{ __html: item.about }}
                  />
                </details>
              );
            })}
          </div>
          <figure class="w-full flex justify-center md:relative md:bottom-[80px]">
            <Image
              src={image}
              width={549}
              height={549}
              class="object-cover md:max-h-[420px]"
              alt={alt}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
