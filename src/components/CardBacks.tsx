// Mirrors CardBacks.json in the iOS repo, in the same order the picker shows them.
// `corner` is each back's own corner radius as a percentage of its width: Classic is drawn
// in code at 6pt on a 78pt card, while the image backs' art is pre-rounded at 5.0–5.5%
// (measured from the @3x PNGs). The white ring must round at least as much as the art, or
// felt shows between them at the corners.
const backs = [
  { id: 'classic', name: 'Classic', src: '/img/back-classic.svg', corner: 7.7 },
  { id: 'madison', name: 'Madison', src: '/img/back-madison.webp', corner: 5.5 },
  { id: 'caviar', name: 'Caviar', src: '/img/back-caviar.webp', corner: 5.5 },
  { id: 'tennis', name: 'Tennis Ball', src: '/img/back-tennis.webp', corner: 5.5 },
  { id: 'bowers', name: 'Bowers', src: '/img/back-bowers.webp', corner: 5.5 },
] as const

// Cards are 1 : 1.46, so the same radius is a smaller share of the height.
const radius = (pctOfWidth: number) => `${pctOfWidth}% / ${(pctOfWidth / 1.46).toFixed(2)}%`

export function CardBacks() {
  return (
    <section id="card-backs" className="mx-auto max-w-5xl scroll-mt-4 px-5 py-16 md:py-24">
      <h2 className="m-0 text-2xl font-semibold tracking-tight md:text-3xl">Pick your deck</h2>
      <p className="mt-3 mb-0 max-w-2xl" style={{ color: 'var(--muted)' }}>
        Five card backs to choose from — the classic navy, the flag of Madison, an Art Deco
        caviar bowl, a tennis ball, and a pair of bowers. Choose one from the main menu and
        it's on every face-down card, from the deal to the deck.
      </p>

      {/* The white edge matches the 1.5pt outline the app draws around every back. */}
      <ul className="felt mt-9 mb-0 flex list-none flex-wrap justify-center gap-x-5 gap-y-6 rounded-2xl px-4 py-8 sm:gap-x-7 sm:px-6">
        {backs.map((b) => (
          <li key={b.id} className="shrink-0 text-center">
            <img
              src={b.src}
              alt={`${b.name} card back`}
              width={234}
              height={342}
              className="block w-20 shadow-lg ring-[1.5px] ring-white sm:w-28"
              style={{ borderRadius: radius(b.corner) }}
              loading="lazy"
            />
            <p className="mt-3 mb-0 text-sm text-white/80">{b.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
