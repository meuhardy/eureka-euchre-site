const links = [
  { href: '/#features', label: 'Features' },
  { href: '/#screens', label: 'Screens' },
  { href: '/support.html', label: 'Support' },
  { href: '/privacy.html', label: 'Privacy' },
]

export function Nav({ onDark = false }: { onDark?: boolean }) {
  const text = onDark ? 'text-white/80 hover:text-white' : 'hover:opacity-70'
  return (
    <nav
      className={`w-full ${onDark ? '' : 'border-b'}`}
      style={onDark ? undefined : { borderColor: 'var(--rule)' }}
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 px-5 py-4">
        <a
          href="/"
          className={`mr-auto flex items-center gap-2.5 font-semibold tracking-tight ${
            onDark ? 'text-white' : ''
          }`}
          style={onDark ? undefined : { color: 'var(--fg)' }}
        >
          <img
            src="/img/app-icon-180.png"
            alt=""
            width={28}
            height={28}
            className="rounded-[7px]"
          />
          Eureka Euchre
        </a>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={`text-sm transition-opacity ${text}`}
            style={onDark ? undefined : { color: 'var(--fg)' }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
