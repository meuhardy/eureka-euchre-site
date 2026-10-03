import type { ReactNode } from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'

/* Shell for the two legal pages. The wording inside them is filed with App Store Connect
   and was corrected once already in the iOS repo (51b6b98) — it is reproduced verbatim and
   should only change deliberately. This component supplies presentation, never content. */
export function Prose({
  title,
  updated,
  children,
}: {
  title: string
  updated?: ReactNode
  children: ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="mx-auto w-full max-w-2xl grow px-5 py-10">
        <h1 className="m-0 text-3xl leading-tight font-semibold tracking-tight">{title}</h1>
        {updated && (
          <p className="mt-2 mb-8 text-sm" style={{ color: 'var(--muted)' }}>
            {updated}
          </p>
        )}
        <div className="prose-page">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
