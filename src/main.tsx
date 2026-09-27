import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { HomePage } from './HomePage'
import './styles.css'

hydrateRoot(document.getElementById("root")!,
  <StrictMode>
    <HomePage />
  </StrictMode>,
)
