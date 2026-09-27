import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { PrivacyPage } from './PrivacyPage'
import './styles.css'

hydrateRoot(document.getElementById("root")!,
  <StrictMode>
    <PrivacyPage />
  </StrictMode>,
)
