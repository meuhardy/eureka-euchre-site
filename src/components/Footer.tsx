export function Footer() {
  return (
    <footer
      className="border-t px-5 py-10 text-sm"
      style={{ borderColor: 'var(--rule)', color: 'var(--muted)' }}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center">
        <p className="m-0">
          © 2026 Michael Euhardy. Eureka Euchre is free, with no in-app purchases and no
          advertising.
        </p>
        <div className="flex gap-4 sm:ml-auto">
          <a href="/support.html" style={{ color: 'var(--link)' }}>
            Support
          </a>
          <a href="/privacy.html" style={{ color: 'var(--link)' }}>
            Privacy
          </a>
          <a href="mailto:support@thatsmysecret.net" style={{ color: 'var(--link)' }}>
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
