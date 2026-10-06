import { defineConfig } from 'astro/config';

export default defineConfig({
	output: 'static',
	compressHTML: true,
	// Dev only: pre-bundle the lazily imported zoom library so Vite doesn't
	// re-optimise it on first click (that caused a 504 and a dead zoom).
	vite: { optimizeDeps: { include: ['medium-zoom'] } },
});
