import { Prose } from './components/Prose'

const faqs = [
  {
    q: 'Do I need a Game Center account?',
    a: (
      <>
        Only for multiplayer, achievements, and the leaderboard. The full single-player game
        works signed out — you just won't see achievement progress reported to Game Center.
        The in-app Awards screen still tracks everything locally either way.
      </>
    ),
  },
  {
    q: 'How does multiplayer work?',
    a: (
      <>
        Through Apple's Game Center. You can invite friends or be matched automatically. A
        match can be two players (the other two seats are played by the computer) or four
        players. One device runs the game and keeps everyone in sync, so the player who
        started the match should stay connected for the duration.
      </>
    ),
  },
  {
    q: "My stats didn't sync to my other device.",
    a: (
      <>
        Statistics sync through iCloud, so both devices need to be signed in to the{' '}
        <strong>same</strong> iCloud account with iCloud enabled for Eureka Euchre. Sync
        deliberately stops if the signed-in account changes, so that one person's history is
        never merged into another's. Signing the original account back in resumes it.
      </>
    ),
  },
  {
    q: 'Can I reset my statistics?',
    a: (
      <>
        Not from inside the app. Because statistics merge across your devices by keeping the
        higher of each figure, a reset on one device would be undone by the next sync from
        another. Deleting the app clears the local copy. Apple does not currently offer a way
        to reset the Game Center achievement or leaderboard progress for a single game from
        Settings, the Game Center app, or anywhere else available to players.
      </>
    ),
  },
  {
    q: 'What are the rules?',
    a: (
      <>
        <strong>How to Play</strong> on the main menu has the complete rules, and{' '}
        <strong>Tutorial</strong> walks through a hand step by step. In short: 24-card deck,
        four players in two partnerships, name trump, take three of five tricks. The jack of
        trump (right bower) is the highest card, and the other jack of the same color (left
        bower) counts as trump and is second-highest.
      </>
    ),
  },
  {
    q: 'Why did my jack suddenly change suit?',
    a: (
      <>
        That's the left bower, and it's correct. When trump is named, the other jack of the
        same color stops being its printed suit and becomes trump. If hearts are trump, the
        jack of diamonds is a heart for that hand — you must follow hearts with it, and it
        beats every heart except the jack of hearts.
      </>
    ),
  },
  {
    q: 'Is there a way to play a hand alone?',
    a: (
      <>
        Yes. If you name trump, you'll be offered the choice to go alone. Your partner sits
        out, and taking all five tricks alone scores 4 points instead of 2.
      </>
    ),
  },
  {
    q: 'Does it cost anything?',
    a: <>No. The app is free, has no in-app purchases, and shows no advertising.</>,
  },
]

export function SupportPage() {
  return (
    <Prose title="Eureka Euchre — Support">
      <p>
        <strong>Contact: support@thatsmysecret.net</strong>
      </p>
      <p>
        Questions, bug reports, and rule disputes are all welcome. If you're reporting a
        problem, it helps to include your device model, your iOS version, and what you were
        doing when it happened.
      </p>

      <h2>Frequently asked</h2>
      {faqs.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Known limitations</h2>
      <ul>
        <li>Portrait orientation only</li>
        <li>Requires iOS 18 or later</li>
        <li>
          Multiplayer needs a network connection and a Game Center sign-in on every device
        </li>
      </ul>
    </Prose>
  )
}
