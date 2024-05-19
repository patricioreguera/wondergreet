/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_iA-wsbCQ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './about_DomdtNx4.mjs';

const $$Astro = createAstro();
const $$Products = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Products;
  const products = [
    { title: "Product 1", description: "Description 1", image: "https://example.com/image1.jpg" },
    { title: "Product 2", description: "Description 2", image: "https://example.com/image2.jpg" },
    { title: "Product 3", description: "Description 3", image: "https://example.com/image3.jpg" },
    { title: "Product 4", description: "Description 4", image: "https://example.com/image4.jpg" },
    { title: "Product 5", description: "Description 5", image: "https://example.com/image5.jpg" },
    { title: "Product 6", description: "Description 6", image: "https://example.com/image6.jpg" },
    { title: "Product 7", description: "Description 7", image: "https://example.com/image7.jpg" },
    { title: "Product 8", description: "Description 8", image: "https://example.com/image8.jpg" },
    { title: "Product 9", description: "Description 9", image: "https://example.com/image9.jpg" },
    { title: "Product 10", description: "Description 10", image: "https://example.com/image10.jpg" }
  ];
  console.log(products);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to WonderGreet." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="grid lg:grid-cols-3 gap-2 md:grid-cols-2 grid-cols-1 p-4 justyfy-center items-center"> ${products.map((product) => renderTemplate`<div class="product"> <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"> <img class="p-8 rounded-t-lg"${addAttribute(product.image, "src")}${addAttribute(product.title, "alt")}> <div class="px-5 pb-5"> <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${product.title}</h5> <p class="font-normal text-gray-700 dark:text-gray-400">${product.description}</p> </div> </div> </div>`)} </main>` })}`;
}, "/Users/patricioreguera/Patricio/wondergreet/src/pages/products.astro", void 0);

const $$file = "/Users/patricioreguera/Patricio/wondergreet/src/pages/products.astro";
const $$url = "/products";

export { $$Products as default, $$file as file, $$url as url };
