import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],

	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
		environment: "happy-dom",
	},
});
