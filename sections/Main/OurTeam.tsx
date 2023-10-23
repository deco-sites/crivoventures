import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  title: HTML;
  /**
   * @format textarea
   */
  description?: string;
  tab?: Content[];
}

export interface Content {
  label: string;
  about: HTML;
}
export default function OurTeam(props: Props) {
  const { title, description, tab } = props;
  return (
    <section class="max-w-[1200px] mx-auto px-[40px]">
      <div class="flex flex-col">
        <HTMLRenderer html={title} class="md:text-[33px] text-[19.6145px]" />
        <div class="grid md:grid-cols-2 grid-cols-1 items-center md:gap-x-[112px]">
          <p class="text-[#174b28] md:text-[18px]">{description}</p>
          <div class="flex flex-col">
            {tab?.map((item) => {
              return (
                <details class="border-b-2 border-solid border-[#174b28]">
                  <summary class="flex justify-between items-center group cursor-pointer py-[30px]">
                    <p class="text-[#174b28] font-bold md:text-[24px] text-[17.3073px]">
                      {item.label}
                    </p>
                    <span class="flex-none text-[24px] font-bold text-[#d1734c]">
                      +
                    </span>
                  </summary>
                  <HTMLRenderer
                    html={item.about}
                    class="md:text-[18px] text-[15.7691px] py-[30px]"
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
