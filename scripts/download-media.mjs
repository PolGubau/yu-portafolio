import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(await readFile(path.join(root, 'media-manifest.json'), 'utf8'));
let next = 0;
let failures = 0;

async function worker() {
	while (next < manifest.length) {
		const item = manifest[next++];
		const target = path.join(root, 'src', 'assets', 'media', item.file);
		await mkdir(path.dirname(target), { recursive: true });
		let lastError;

		for (let attempt = 1; attempt <= 3; attempt++) {
			try {
				const response = await fetch(item.url, { signal: AbortSignal.timeout(60_000) });
				if (!response.ok) throw new Error(`HTTP ${response.status}`);
				await writeFile(target, new Uint8Array(await response.arrayBuffer()));
				console.log(`Saved ${item.file}`);
				lastError = undefined;
				break;
			} catch (error) {
				lastError = error;
			}
		}

		if (lastError) {
			failures++;
			console.error(`Failed ${item.file}: ${lastError.message}`);
		}
	}
}

await Promise.all(Array.from({ length: 5 }, () => worker()));
if (failures) process.exitCode = 1;
console.log(`Downloaded ${manifest.length - failures}/${manifest.length} files.`);
