// src/components/SeccionFuneral.jsx

import SectionDivider from './SectionDivider'
import CandleRow from './CandleRow'

const GALLERY_ITEMS = [
  { src: '/media/fotos/f1.jpeg', label: 'Flores blancas' },
  { src: '/media/fotos/f2.jpeg', label: 'Flores blancas' },
  { src: '/media/fotos/f3.jpeg', label: 'Flores blancas' },
  { src: '/media/fotos/f4.jpeg', label: 'Flores blancas' },

]

export default function SeccionFuneral() {
  return (
    <div
      id="funeral"
      className="section section-dark"
      style={{ background: 'linear-gradient(180deg,#060402,#0a0806)' }}
    >
      <div className="section-title"></div>
      <div className="section-subtitle">Último Adiós</div>

      <SectionDivider />

      <p className="section-intro">
        Ese día quedó marcado en la memoria de todos. Entre el silencio y las lágrimas, se sintió el cariño profundo de quienes lo amaron.
      </p>

      <CandleRow count={5} tallBodies />

      <div className="gallery">
        {GALLERY_ITEMS.map((item, i) => (
          <div key={i} className="gallery-item funeral-style">
            <img src={item.src} alt={item.label} />
          </div>
        ))}
      </div>

      <SectionDivider />
    </div>
  )
}