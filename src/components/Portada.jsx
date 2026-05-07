import Stars from "./Stars";
import CandleRow from "./CandleRow";
import SectionDivider from "./SectionDivider";

export default function Portada({ onEnter }) {
  return (
    <div className="hero" style={{ background: "#0a0806", minHeight: "100vh" }}>
      <Stars />

      <div className="hero-content">
        <div className="photo-frame">
          <img
            src="/media/fotos/d1.jpeg"
            alt="Foto homenaje"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "inherit",
            }}
          />
        </div>
        <div className="hero-name gold-text">DIEGO FRANCISCO DIAZ GUIROLA</div>

        {/* FECHAS */}
        <div className="hero-dates">3 · Febrero · 2011 — 27 · Marzo · 2026</div>

        <SectionDivider />
        <p className="hero-quote">
          "Tu luz no se apagó, solo cambió de lugar… ahora brilla eternamente en
          nuestras almas"
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <button className="enter-btn" onClick={onEnter}>
            <span>✦ ENTRAR AL HOMENAJE ✦</span>
          </button>
        </div>

        <CandleRow count={5} />

        <p className="hero-footer-label">SIEMPRE EN NUESTROS CORAZONES DIEGO GUIROLA</p>
      </div>
    </div>
  );
}
