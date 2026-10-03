import { useState } from 'react'

const shots = [
  { key: 'menu', label: 'Menu' },
  { key: 'game', label: 'A hand' },
  { key: 'tutorial', label: 'Tutorial' },
  { key: 'stats', label: 'Statistics' },
  { key: 'awards', label: 'Awards' },
] as const

type Device = 'phone' | 'tablet'

const dims: Record<Device, { w: number; h: number; cls: string }> = {
  phone: { w: 600, h: 1303, cls: 'w-44 sm:w-52' },
  tablet: { w: 760, h: 1013, cls: 'w-64 sm:w-80' },
}

export function Screens() {
  const [device, setDevice] = useState<Device>('phone')
  const d = dims[device]

  return (
    <section id="screens" className="felt scroll-mt-4 text-white">
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <div className="flex flex-wrap items-end gap-4">
          <h2 className="m-0 text-2xl font-semibold tracking-tight md:text-3xl">
            A look at it
          </h2>
          <div
            className="ml-auto inline-flex rounded-full bg-black/25 p-1 ring-1 ring-white/15"
            role="group"
            aria-label="Choose device"
          >
            {(['phone', 'tablet'] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setDevice(v)}
                aria-pressed={device === v}
                className={`cursor-pointer rounded-full px-4 py-1.5 text-sm capitalize transition-colors ${
                  device === v ? 'bg-white text-felt-700 font-medium' : 'text-white/75 hover:text-white'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-9 flex list-none gap-5 overflow-x-auto p-0 pb-4">
          {shots.map((s) => (
            <li key={s.key} className="shrink-0">
              <img
                src={`/img/${device}-${s.key}.webp`}
                alt={`Eureka Euchre — ${s.label}`}
                width={d.w}
                height={d.h}
                className={`block rounded-2xl shadow-xl ring-1 ring-white/10 ${d.cls}`}
                loading="lazy"
              />
              <p className="mt-3 mb-0 text-center text-sm text-white/75">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
