// src/components/Nav.jsx
// Navegación fija con menú desplegable — secciones del homenaje

import { useState } from 'react'

const NAV_LINKS = [
  ['hero',       'Inicio'],
  ['recuerdos',  'Infancia'],
  ['cumpleanos', 'Cumpleaños'],
  ['escuela',    'Homenaje Escolar'],
  ['funeral',    ' Último Adiós'],
  ['videos',     ' Videos'],
  ['frases',     'Cartas de amigos'],
  ['comentarios','Condolencias'],
  ['final',      'Despedida'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <nav className="nav">
        <div className="nav-logo">HOMENAJE-ETERNO</div>
        <button className="nav-menu-btn" onClick={() => setOpen((v) => !v)}>
          SECCIONES ☰
        </button>
      </nav>

      {open && (
        <>
          <div className="nav-overlay" onClick={() => setOpen(false)} />
          <div className="nav-dropdown">
            {NAV_LINKS.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(id) }}
              >
                {label}
              </a>
            ))}
          </div>
        </>
      )}
    </>
  )
}
