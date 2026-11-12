// Mirrors CardBacks.json in the iOS repo, in the same order the picker shows them.
const backs = [
  { id: 'classic', name: 'Classic', src: '/img/back-classic.svg' },
  { id: 'madison', name: 'Madison', src: '/img/back-madison.webp' },
  { id: 'caviar', name: 'Caviar', src: '/img/back-caviar.webp' },
  { id: 'tennis', name: 'Tennis Ball', src: '/img/back-tennis.webp' },
  { id: 'bowers', name: 'Bowers', src: '/img/back-bowers.webp' },
] as const

export function CardBacks() {
  return (
    <section id="card-backs" className="mx-auto max-w-5xl scroll-mt-4 px-5 py-16 md:py-24">
      <h2 className="m-0 text-2xl font-semibold tracking-tight md:text-3xl">Pick your deck</h2>
      <p className="mt-3 mb-0 max-w-2xl" style={{ color: 'var(--muted)' }}>
        Five card backs to choose from — the classic navy, the flag of Madison, an Art Deco
        caviar plate, a tennis ball, and a pair of bowers. Choose one from the main menu and
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
              className="block w-20 rounded-[5px] shadow-lg ring-[1.5px] ring-white sm:w-28 sm:rounded-[7px]"
              loading="lazy"
            />
            <p className="mt-3 mb-0 text-sm text-white/80">{b.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
