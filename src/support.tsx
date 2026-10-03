import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { SupportPage } from './SupportPage'
import './styles.css'

hydrateRoot(document.getElementById("root")!,
  <StrictMode>
    <SupportPage />
  </StrictMode>,
)
