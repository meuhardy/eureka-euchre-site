import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Screens } from './components/Screens'
import { Footer } from './components/Footer'

export function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <Features />
        <Screens />
        <section className="mx-auto max-w-5xl px-5 py-16 md:py-20">
          <h2 className="m-0 text-2xl font-semibold tracking-tight">Questions?</h2>
          <p className="mt-3 mb-0 max-w-2xl" style={{ color: 'var(--muted)' }}>
            The{' '}
            <a href="/support/" style={{ color: 'var(--link)' }}>
              support page
            </a>{' '}
            answers the common ones — how multiplayer works, why your jack changed suit, what
            syncs and what doesn't. Anything else, including bug reports and rule disputes,
            goes to{' '}
            <a href="mailto:support@thatsmysecret.net" style={{ color: 'var(--link)' }}>
              support@thatsmysecret.net
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
