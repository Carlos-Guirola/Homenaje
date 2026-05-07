// src/components/SeccionFinal.jsx
// Página final — despedida con mensaje de cierre
// ─────────────────────────────────────────────────
// PERSONALIZAR:
//   · Cambia el texto en final-text
//   · Cambia el texto en final-label
//   · Para imagen de fondo: agrega style con backgroundImage
// ─────────────────────────────────────────────────

import Stars from './Stars'
import SectionDivider from './SectionDivider'
import CandleRow from './CandleRow'

export default function SeccionFinal() {
  return (
    <div id="final" className="final-section">
      <Stars />

      <div className="final-content">
        <div className="final-dove">🕊️</div>

        <div className="final-title gold-text">Hasta que nos volvamos a ver</div>
        <SectionDivider />

        <p className="final-text">
          Cerramos estas páginas con el corazón lleno de gratitud por cada momento
          que compartiste con nosotros. Tu amor sigue vivo en cada sonrisa,
          en cada recuerdo, en cada amanecer.
        </p>

        <p className="final-label">DESCANSA EN PAZ · EN NUESTROS CORAZONES</p>

        <CandleRow count={7} />

        <div className="final-footer">
          <p>HOMENAJE ETERNO · CON AMOR DE SU FAMILIA</p>
        </div>
      </div>
    </div>
  )
}
