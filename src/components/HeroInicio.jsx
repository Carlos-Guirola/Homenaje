import Stars from './Stars'
import SectionDivider from './SectionDivider'
import CandleRow from './CandleRow'

export default function HeroInicio() {
  return (
    <div id="hero" className="hero">
      <Stars />

      <div className="hero-content">

        {/* FOTO */}
        <div className="photo-frame">
          <img
            src="/media/fotos/d2.png"
            alt="Foto homenaje"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 'inherit'
            }}
          />
        </div>

        {/* NOMBRE */}
        <div className="hero-name gold-text">
          DIEGO FRANCISCO DIAZ GUIROLA
        </div>

        {/* FECHAS */}
        <div className="hero-dates">
         3 · Febrero · 2011 — 27 · Marzo · 2026
        </div>

        {/* FRASE */}
        <p className="hero-quote">
          "Aunque el tiempo pase y la distancia duela,<br />
          tu esencia sigue viva en cada recuerdo."
        </p>

        <SectionDivider />
        <CandleRow count={5} />

      </div>
    </div>
  )
}