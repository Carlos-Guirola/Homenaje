// src/components/Stars.jsx
// Fondo de estrellas animadas — se usa en la portada y en la sección final

const STARS_DATA = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 4,
  size: Math.random() * 1.5 + 0.5,
  duration: 2 + Math.random() * 3,
}))

export default function Stars() {
  return (
    <div className="stars" aria-hidden="true">
      {STARS_DATA.map((s) => (
        <div
          key={s.id}
          className="star"
          style={{
            left: s.x + '%',
            top: s.y + '%',
            width: s.size + 'px',
            height: s.size + 'px',
            animation: `starFade ${s.duration}s ${s.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  )
}
