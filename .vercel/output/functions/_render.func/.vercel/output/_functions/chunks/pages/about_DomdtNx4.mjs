/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, f as renderComponent, g as renderHead, h as renderSlot } from '../astro_iA-wsbCQ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$3 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/patricioreguera/Patricio/wondergreet/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$2 = createAstro();
const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Menu;
  const menuItems = [
    {
      title: "Productos",
      link: "/products"
    },
    {
      title: "Personaliza",
      link: "/"
    },
    {
      title: "Nosotros",
      link: "/about"
    },
    {
      title: "Contacto",
      link: "/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="px-4 flex items-center flex-wrap justify-between"> <div class="flex gap-4 py-3"> <a href="/"> <img src="/Logo.png" class="h-12"> </a> </div> <div class="flex gap-5 text-secondary"> ${menuItems.map((item) => renderTemplate`<a class="hover:pointer text-secondary"${addAttribute(item.link, "href")}> ${item.title} </a>`)} </div> </div>`;
}, "/Users/patricioreguera/Patricio/wondergreet/src/components/Menu.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Menu", $$Menu, {})} ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "/Users/patricioreguera/Patricio/wondergreet/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Wonder Greet" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <p>
En WonderGreet, nos dedicamos a hacer que cada momento especial sea aún
			más memorable. Somos expertos en la creación de tarjetas personalizadas y
			productos emocionantes que celebran los hitos más importantes de la vida.
			Desde anunciar un embarazo hasta felicitar por una boda, nuestras
			creaciones llenas de sorpresas y detalles únicos transmiten emociones
			genuinas y fortalecen los lazos afectivos entre las personas. Con
			WonderGreet, cada ocasión se convierte en una experiencia inolvidable.
</p> </main> ` })}`;
}, "/Users/patricioreguera/Patricio/wondergreet/src/pages/about.astro", void 0);

const $$file = "/Users/patricioreguera/Patricio/wondergreet/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, about as a };
