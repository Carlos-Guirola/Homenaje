
import SectionDivider from './SectionDivider'



const GALLERY_ITEMS = ['Acto de homenaje', 'Flores y ofrendas', 'Compañeros unidos', 'Galería escolar']

export default function SeccionEscuela() {
  return (
    <div id="escuela" className="section">
      <div className="section-title"></div>
      <div className="section-subtitle">Homenaje Escolar</div>
      <SectionDivider />

      <p className="section-intro">
        La comunidad escolar se unió para honrar tu memoria. Compañeros y maestros
        dejaron flores, palabras y lágrimas de amor.
      </p>

      {/* ── VIDEO PRINCIPAL ───────────────────────────── */}
      <div className="tribute-video">
        {/*
          REEMPLAZAR por iframe de YouTube:
          <iframe
            src="https://www.youtube.com/embed/TU_ID"
            title="Homenaje Escolar"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        */}
        <div className="play-btn">
          <div className="play-triangle" />
        </div>
        <div className="video-label">▶ VIDEO PRINCIPAL DEL HOMENAJE</div>
        <div className="video-hint">Colocar enlace de video aquí</div>
      </div>

    
      {/* ── GALERÍA ───────────────────────────────────── */}
      <div className="gallery" style={{ marginTop: 4 }}>
        {GALLERY_ITEMS.map((label, i) => (
          <div key={i} className="gallery-item">
            <div className="gallery-placeholder">
              <span className="gallery-emoji">🏫</span>
              <span className="gallery-caption">{label}</span>
            </div>
          </div>
        ))}
      </div>

      <SectionDivider />
    </div>
  )
}
