/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_iA-wsbCQ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN, {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const User = asDrizzleTable("User", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "User", "primaryKey": true } }, "username": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "username", "collection": "User", "primaryKey": false, "optional": false } }, "email": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "email", "collection": "User", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const users = await db.select().from(User);
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const id = Number(formData.get("id"));
    const username = formData.get("username");
    const email = formData.get("email");
    if (typeof id === "number" && typeof username === "string" && typeof email === "string") {
      await db.insert(User).values({ id, username, email });
    }
  }
  return renderTemplate`${maybeRenderHead()}<h2>Comments</h2> <form method="POST" style="display: grid"> <label for="author">id</label> <input id="author" name="id" placeholder="author" class="border border-neutral-500"> <label for="content">Username</label> <textarea id="content" name="username" class="border border-neutral-500" placeholder="content"></textarea> <label for="content">email</label> <textarea id="content" name="email" class="border border-neutral-500" placeholder="content"></textarea> <button type="submit" class="bg-neutral-400">Submit</button> </form> ${users.map(({ username, email }) => renderTemplate`<article> <p>Author: ${username}</p> <p>${email}</p> </article>`)} <!-- ---
import Layout from "../layouts/Layout.astro";
import Banner from "../components/Banner.astro";
import BannerProducts from "../components/BannerProducts.astro";
import Testimony from "../components/Testimony.astro";
import SpecialOffer from "../components/SpecialOffer.astro";
---

<Layout title="Welcome to WonderGreet">
	<main>
		<Banner />
		<BannerProducts />
		<Testimony />
		<SpecialOffer />
	</main>
</Layout>
 -->`;
}, "/Users/patricioreguera/Patricio/wondergreet/src/pages/index.astro", void 0);

const $$file = "/Users/patricioreguera/Patricio/wondergreet/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
