import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), db()],
	output: "server",
	adapter: vercel(),
});
/* 

import vercel from '@astrojs/vercel/serverless';
import vercel from '@astrojs/vercel/static'; */
