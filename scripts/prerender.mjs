import { readFile, writeFile } from 'node:fs/promises'
import { render } from '../dist-ssr/entry-server.js'

// Injects build-time HTML into each page's #root. The client then hydrates it, so the
// markup is identical whether or not JavaScript runs.
const pages = {
  index: 'dist/index.html',
  privacy: 'dist/privacy/index.html',
  support: 'dist/support/index.html',
}

for (const [page, file] of Object.entries(pages)) {
  const shell = await readFile(file, 'utf8')
  const html = render(page)
  const out = shell.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  if (out === shell) {
    console.error(`prerender: no #root placeholder found in ${file}`)
    process.exit(1)
  }
  await writeFile(file, out)
  console.log(`prerendered ${file} (+${(html.length / 1024).toFixed(1)}kB markup)`)
}
