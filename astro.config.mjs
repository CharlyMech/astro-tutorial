import { defineConfig } from "astro/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	vite: {
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src"),
				"@styles": path.resolve(__dirname, "src/styles")
			}
		}
	}
});