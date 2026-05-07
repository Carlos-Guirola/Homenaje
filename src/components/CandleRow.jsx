// src/components/CandleRow.jsx
// Fila de velas animadas — usada en portada, funeral y sección final

export default function CandleRow({ count = 5, tallBodies = false }) {
  const delays = Array.from({ length: count }, (_, i) => (i * 0.25) % 1.5)

  return (
    <div className="candle-row">
      {delays.map((delay, i) => (
        <div key={i} className="candle">
          <div className="candle-flame" style={{ animationDelay: delay + 's' }}>
            🕯️
          </div>
          {tallBodies && (
            <div
              className="candle-body"
              style={{ height: 32 + (i % 3) * 8 + 'px' }}
            />
          )}
        </div>
      ))}
    </div>
  )
}
