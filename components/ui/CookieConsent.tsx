import { useId } from "../../sdk/useId.ts";

const script = (id: string) => {
  const callback = () => {
    const KEY = "store-cookie-consent";
    const ACCEPTED = "accepted";
    const HIDDEN = "translate-y-[200%]";

    const consent = localStorage.getItem(KEY);
    const elem = document.getElementById(id);

    if (consent !== ACCEPTED && elem) {
      const accept = elem.querySelector("[data-button-cc-accept]");
      accept && accept.addEventListener("click", () => {
        localStorage.setItem(KEY, ACCEPTED);
        elem.classList.add(HIDDEN);
      });
      const close = elem.querySelector("[data-button-cc-close]");
      close &&
        close.addEventListener("click", () => elem.classList.add(HIDDEN));
      elem.classList.remove(HIDDEN);
    }
  };

  addEventListener("scroll", callback, { once: true });
};

export interface Props {
  title?: string;
  /** @format html */
  text?: string;
  policy?: {
    text?: string;
    link?: string;
  };
  buttons?: {
    allowText: string;
    cancelText?: string;
  };
  layout?: {
    position?: "Expanded" | "Left" | "Center" | "Right";
    content?: "Tiled" | "Piled up";
  };
}

const DEFAULT_PROPS = {
  title: "",
  text:
    "Guardamos estatísticas de visitas para melhorar sua experiência de navegação.",
  policy: {
    text: "",
    link: "",
  },
  buttons: {
    allowText: "Aceitar",
    cancelText: "Fechar",
  },
  layout: {
    position: "Expanded",
    content: "Tiled",
  },
};

function CookieConsent(props: Props) {
  const id = useId();
  const { title, text, policy, buttons, layout } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <>
      <div
        id={id}
        class={`transform-gpu translate-y-[200%] transition
          fixed bottom-0 lg:bottom-[19px] z-10 lg:flex m-[20px] cookie
          ${
          layout?.position === "Left" ? "lg:justify-start lg:left-[19px]" : ""
        }
          ${layout?.position === "Center" ? "lg:justify-center" : ""}
          ${
          layout?.position === "Right" ? "lg:justify-end lg:right-[19px]" : ""
        }
        `}
      >
        <div
          class={`
          p-[10px] flex flex-col bg-[#eee]
          ${
            !layout?.position || layout?.position === "Expanded"
              ? "lg:container lg:mx-auto"
              : `
          ${layout?.content === "Piled up" ? "lg:w-[480px]" : ""}
          ${!layout?.content || layout?.content === "Tiled" ? "w-[370px]" : ""}
        `
          }
          ${
            !layout?.content || layout?.content === "Tiled"
              ? "lg:flex-col lg:items-start"
              : "lg:flex-row"
          }
        `}
        >
          <div
            class={`flex-auto flex flex-col m-[10px] ${
              !layout?.content || layout?.content === "Tiled" ? "lg:gap-2" : ""
            }`}
          >
            {title && <h3 class="text-[12px] text-[#111]">{title}</h3>}
            {text && (
              <div
                class="text-[12px] font-arial leading-[1.5em] tracking-tighter"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}
            {policy?.text && policy?.link && (
              <a
                href={policy.link}
                class="text-sm link link-secondary text-[#111]"
              >
                {policy.text}
              </a>
            )}
          </div>

          <div
            class={`flex ${
              !layout?.position || layout?.position === "Expanded"
                ? "lg:flex-row"
                : ""
            }`}
          >
            <button
              class="btn border-b border-[#bbb] m-[10px] text-[12px] font-arial text-[#111]"
              data-button-cc-accept
              aria-label={`${buttons.allowText} Cookies`}
            >
              {buttons.allowText}
            </button>
            <button
              class="btn btn-outline border-b border-[#bbb] m-[10px] text-[12px] font-arial text-[#111]"
              data-button-cc-close
              aria-label={`${buttons.cancelText} Cookies`}
            >
              {buttons.cancelText}
            </button>
          </div>
        </div>
      </div>
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: `(${script})("${id}");` }}
      />
    </>
  );
}

export default CookieConsent;
