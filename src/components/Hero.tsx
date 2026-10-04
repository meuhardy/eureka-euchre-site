import { Nav } from './Nav'

const chips = ['Free', 'No advertising', 'No in-app purchases', 'No data collected']

export function Hero() {
  return (
    <header className="felt text-white">
      <Nav onDark />
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 pt-10 pb-16 md:grid-cols-[1fr_auto] md:pt-16 md:pb-24">
        <div>
          <img
            src="/img/app-icon.webp"
            alt="Eureka Euchre app icon"
            width={96}
            height={96}
            className="mb-6 h-20 w-20 rounded-[22px] shadow-lg ring-1 ring-white/15 md:h-24 md:w-24"
          />
          <h1 className="m-0 text-4xl leading-[1.08] font-semibold tracking-tight md:text-5xl">
            Euchre, the way
            <br />
            it's actually played.
          </h1>
          <p className="mt-4 mb-0 max-w-xl text-lg text-white/85">
            Right and left bowers, stick the dealer, games to ten. Play the computer offline,
            or take on friends over Game Center.
          </p>

          <ul className="mt-7 mb-0 flex list-none flex-wrap gap-2 p-0">
            {chips.map((c) => (
              <li
                key={c}
                className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/90 ring-1 ring-white/15"
              >
                {c}
              </li>
            ))}
          </ul>

          {/* The app is not on the App Store yet — submission is still in progress, so there
              is deliberately no download button here to link to nothing. */}
          <p className="mt-7 mb-0 text-sm text-white/70">
            Coming soon to iPhone and iPad. Requires iOS 18 or later.
          </p>
        </div>

        <div className="justify-self-center md:justify-self-end">
          <PhoneFrame src="/img/phone-game.webp" alt="A hand of Eureka Euchre at the bidding decision, with the up-card showing" />
        </div>
      </div>
    </header>
  )
}

export function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-[2.2rem] bg-black/35 p-2 shadow-2xl ring-1 ring-white/10">
      <img
        src={src}
        alt={alt}
        width={600}
        height={1303}
        className="block w-56 rounded-[1.7rem] sm:w-64"
        loading="lazy"
      />
    </div>
  )
}
