import { Prose } from './components/Prose'

const APPLE_PRIVACY = 'https://www.apple.com/legal/privacy/'

export function PrivacyPage() {
  return (
    <Prose
      title="Privacy Policy — Eureka Euchre"
      updated={<strong>Last updated: 9 September 2026</strong>}
    >
      <p>
        Eureka Euchre does not collect, store, transmit, or sell any personal information.
      </p>
      <p>
        There is no account to create, no analytics, no advertising, no tracking, and no
        third-party software of any kind in the app. The app talks to no servers operated by
        the developer, because there are none.
      </p>

      <h2>What the app stores, and where</h2>
      <p>
        <strong>On your device.</strong> Your game statistics — games played and won, hands,
        points, streaks, and achievement progress — are written to a file inside the app's
        own storage. This never leaves your device except through the two Apple services
        below, and it is deleted when you delete the app.
      </p>
      <p>
        <strong>In your iCloud account.</strong> If you are signed in to iCloud, the same
        statistics are copied to your private iCloud key-value storage so your progress
        follows you between your own devices. This data lives in <em>your</em> iCloud
        account. The developer cannot see it, and it is governed by{' '}
        <a href={APPLE_PRIVACY}>Apple's Privacy Policy</a>.
      </p>
      <p>
        <strong>In Game Center.</strong> If you are signed in to Game Center, achievement
        progress and your total-wins score are reported to Apple's Game Center service, and
        multiplayer matches are arranged through it. What other players can see — your Game
        Center nickname and your achievements — is controlled by your Game Center privacy
        settings, not by this app. Game Center is operated by Apple and governed by{' '}
        <a href={APPLE_PRIVACY}>Apple's Privacy Policy</a>.
      </p>
      <p>
        Both are optional. The app is fully playable against the computer with no iCloud
        account and no Game Center sign-in.
      </p>

      <h2>What the app does not do</h2>
      <ul>
        <li>
          No personal information is collected — no name, email, address, phone number, or
          contacts
        </li>
        <li>
          No advertising identifier (IDFA) is read, and no app tracking permission is
          requested
        </li>
        <li>No analytics or crash-reporting service is embedded</li>
        <li>No location, camera, microphone, photo, or contact access is requested</li>
        <li>No data is ever sold or shared with third parties</li>
        <li>Nothing is transmitted to any server operated by the developer</li>
      </ul>

      <h2>Multiplayer</h2>
      <p>
        During a Game Center match, the app exchanges only what the game itself needs — cards
        played, bids, scores, and seat assignments — directly with the other players' devices
        through Apple's Game Center networking. Those messages contain no personal
        information beyond the Game Center nickname Apple already shows to your opponents.
      </p>

      <h2>Children</h2>
      <p>
        The app is rated suitable for ages 4 and up. It collects nothing from anyone, of any
        age, and contains no advertising or in-app purchases.
      </p>

      <h2>Deleting your data</h2>
      <p>
        Deleting the app removes the on-device statistics. Turning off iCloud sync for Eureka
        Euchre in <strong>Settings → [your name] → iCloud</strong> stops it from syncing
        further, but Apple does not provide a way to confirm or force deletion of the copy
        already stored in your iCloud key-value storage. There is currently no user-facing
        way to reset the achievement or leaderboard progress Game Center holds for this app.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, the revised version will be posted at this address with an
        updated date above.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy: <strong>privacy@thatsmysecret.net</strong>
      </p>
    </Prose>
  )
}
