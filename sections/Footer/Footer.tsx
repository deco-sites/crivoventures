import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /** @description add a text similar to the content of the link's URL in the Header without '#'. */
  id?: string;
  contact: Contact;
  socialMedia?: {
    image?: ImageWidget;
    label?: string;
    url?: string;
  }[];
  image: ImageWidget;
  alt?: string;
}

export interface Contact {
  /** @format html */
  title: string;
  /** @format html */
  text: string;
}

export default function Footer(props: Props) {
  const { id, contact, image, alt, socialMedia } = props;

  return (
    <footer class="w-full relative pt-[3.3vmax] mt-[30.01px]" id={id}>
      <div class="grid grid-cols-2 items-center max-w-[1200px] w-full mx-auto md:pl-[40px] pl-[20px]">
        <div class="flex flex-col">
          {contact.title && (
            <div>
              <div
                class="md:text-[33px] text-[24.3927px] pb-[18.31px]"
                dangerouslySetInnerHTML={{ __html: contact.title }}
              />

              <div
                class="md:text-[24px] text-[19.7673px] pb-[37.79px]"
                dangerouslySetInnerHTML={{ __html: contact.text }}
              />
            </div>
          )}
          {socialMedia && socialMedia.map &&
            socialMedia.map((item) => (
              <a href={item.url}>
                <figure>
                  <Image
                    src={item.image || ""}
                    width={32}
                    height={32}
                    alt={item.label || ""}
                  />
                </figure>
              </a>
            ))}
        </div>
        <figure class="md:py-[3.3vmax] pb-[3.3vmax] md:mt-[3.3vmax] absolute right-0 md:w-auto w-[70%] md:h-auto h-full">
          <Image
            src={image}
            width={311}
            height={311}
            class="md:relative absolute right-0"
            alt={alt}
          />
        </figure>
      </div>
    </footer>
  );
}
