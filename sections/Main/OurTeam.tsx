import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  /** @description add a text similar to the content of the link's URL in the Header without '#'. */
  id?: string;
  title: HTML;
  /**
   * @format textarea
   */
  description?: string;
  accordion?: Content[];
}
export interface partnerImage {
  image: LiveImage;
  width: number;
  height: number;
  label?: string;
}
export interface Content {
  label: string;
  about: HTML;
  partner?: partnerImage;
}

export default function OurTeam(props: Props) {
  const { id, title, description, accordion } = props;
  return (
    <section
      class="max-w-[1200px] mx-auto md:pl-[40px] px-[20px] py-[6.6vmax]"
      id={id}
    >
      <div class="flex flex-col">
        <HTMLRenderer
          html={title}
          class="md:text-[33px] text-[23.0073px] relative md:pb-0 pb-2 max-w-[443.05px]"
        />
        <div class="grid md:grid-cols-2 grid-cols-1 md:gap-x-[112px]">
          <p class="text-[#174b28] md:text-[18px] md:mt-28 leading-[32.4px] text-justify max-w-[443.05px]">
            {description}
          </p>
          <div class="flex flex-col">
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
                  <figure class="mb-3 flex items-center justify-center">
                    <img class={`rounded-full object-cover !max-w-[200px] !max-h-[200px]`}
                      src={item.partner?.image} 
                      loading={"lazy"} 
                      width={item.partner?.width} 
                      height={item.partner?.height} 
                      label={item.partner?.label} 
                    />
                  </figure>
                  <HTMLRenderer
                    html={item.about}
                    class="md:text-[18px] text-[15.7691px] pb-[30px]"
                  />
                </details>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
