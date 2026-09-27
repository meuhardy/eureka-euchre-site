import { renderToString } from 'react-dom/server'
import { HomePage } from './HomePage'
import { PrivacyPage } from './PrivacyPage'
import { SupportPage } from './SupportPage'

const pages = {
  index: HomePage,
  privacy: PrivacyPage,
  support: SupportPage,
} as const

export type PageName = keyof typeof pages

/* Renders a page to static HTML at build time. The two legal pages are the reason this
   exists: /privacy.html and /support.html are filed with App Store Connect, and a reviewer
   or a crawler fetching them must get the actual text, not an empty root div waiting on JS. */
export function render(page: PageName): string {
  const Page = pages[page]
  return renderToString(<Page />)
}
