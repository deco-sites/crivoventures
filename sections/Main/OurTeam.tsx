export interface Props {
  /** @description add a text similar to the content of the link's URL in the Header without '#'. */
  id?: string;
  /** @format html */
  title: string;
  /**
   * @format textarea
   */
  description?: string;
  accordion?: Content[];
}

export interface Content {
  label: string;
  /** @format html */
  about: string;
}

export default function OurTeam(props: Props) {
  const { id, title, description, accordion } = props;
  return (
    <section
      class="max-w-[1200px] mx-auto md:pl-[40px] px-[20px] py-[6.6vmax]"
      id={id}
    >
      <div class="flex flex-col">
        <div
          class="md:text-[33px] text-[23.0073px] md:absolute relative md:pb-0 pb-2 max-w-[443.05px]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div class="grid md:grid-cols-2 grid-cols-1 items-center md:gap-x-[112px]">
          <p class="text-[#174b28] md:text-[18px] leading-[32.4px] text-justify max-w-[443.05px]">
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
                  <div
                    class="md:text-[18px] text-[15.7691px] py-[30px]"
                    dangerouslySetInnerHTML={{ __html: item.about }}
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
