import SectionDivider from './SectionDivider'

const VIDEOS = [
  { type: 'youtube', id: '509CNOyY2rI', label: '' },
  { type: 'youtube', id: '7R7bo72fa5k', label: '' },
  { type: 'youtube', id: 'dkBBkg4Taeo', label: '' },
   { type: 'youtube', id:'ZEZAe0S9Cgs', label: '' },
   { type: 'youtube', id:'TeI5Kq0Svvw', label: '' },
]

function VideoItem({ type, src, id, label }) {
  return (
    <div className="video-card">

      {type === 'youtube' ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <video
          src={src}
          controls
          playsInline
          preload="metadata"
        />
      )}

      {label && <div className="video-label">{label}</div>}
    </div>
  )
}

export default function SeccionVideos() {
  return (
    <div id="videos" className="section section-dark">

      <style>{`
        .video-grid {
          display: grid;
          gap: 18px;
          margin-top: 20px;
        }

        .video-card {
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
          border: 1px solid #b8965a33;
          background: #0c0a06;
          padding: 8px;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .video-card:hover {
          transform: scale(1.01);
          border-color: #b8965a88;
        }

        .video-card video,
        .video-card iframe {
          width: 100%;
          aspect-ratio: 16 / 9;
          border: none;
          display: block;
          border-radius: 6px;
          background: black;
        }

        .video-label {
          margin-top: 8px;
          text-align: center;
          font-size: 12px;
          color: #b8965a;
          letter-spacing: 1px;
          font-family: 'Cinzel', serif;
        }
      `}</style>

      <div className="section-title">Sección VI</div>
      <div className="section-subtitle">Galería de Videos</div>

      <SectionDivider />

      <div className="video-grid">
        {VIDEOS.map((v, i) => (
          <VideoItem key={i} {...v} />
        ))}
      </div>

      <SectionDivider />
    </div>
  )
}
