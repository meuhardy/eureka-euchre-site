const features = [
  {
    title: 'Play anywhere',
    body: "No account. No sign-up. No connection required. You're dealt in against three computer players who count trump, read the trick, and play with their partner rather than against them.",
  },
  {
    title: 'Learn it properly',
    body: 'The left bower is where most new players get lost. The interactive tutorial walks through a real hand, step by step, and the full rules are one tap away.',
  },
  {
    title: 'Play with friends',
    body: "Invite friends through Game Center or get matched automatically. Four-handed with three other people, or two-handed with the computer filling the empty seats. Invitations work even when the app isn't open.",
  },
  {
    title: 'Track everything',
    body: 'Two dozen lifetime statistics, all of them visible — how often your trump calls come home, how you do going alone, euchres delivered and suffered, best and current streaks. Synced across your devices through iCloud.',
  },
  {
    title: '22 achievements',
    body: 'From your first hand to five hundred wins. March, Alone March, Comeback Kid, Stone Wall, Table Master. Every requirement is visible from the start, with progress bars — nothing hidden.',
  },
  {
    title: 'The rules, done right',
    body: 'Order up, pass, or go alone. Stick the dealer. Euchres worth two, marches worth two, a march alone worth four. Games to ten points. If you grew up on this game, it plays the way you remember.',
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-5xl scroll-mt-4 px-5 py-16 md:py-24">
      <h2 className="m-0 text-2xl font-semibold tracking-tight md:text-3xl">
        Everything the kitchen-table game has, and the parts nobody explains.
      </h2>
      <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title}>
            <h3 className="m-0 text-base font-semibold" style={{ color: 'var(--accent)' }}>
              {f.title}
            </h3>
            <p className="mt-2 mb-0 text-[0.95rem] leading-relaxed" style={{ color: 'var(--muted)' }}>
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
