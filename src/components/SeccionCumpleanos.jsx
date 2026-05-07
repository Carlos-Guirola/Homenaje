import SectionDivider from './SectionDivider'
const GALLERY_ITEMS = [
  { src: '/media/fotos/11.jpg'},
  { src: '/media/fotos/14.jpg' },
  { src: '/media/fotos/15.jpg', wide: true  },
  { src: '/media/fotos/Fotos/n7.jpeg' },
  { src: '/media/fotos/Fotos/n9.jpeg' },
 { src: '/media/fotos/Fotos/m4.jpeg' },
  { src: '/media/fotos/Fotos/n8.jpeg' },
]

// 🎥 VIDEOS
const VIDEOS = [
  { src: 'https://res.cloudinary.com/dq6ssao8d/video/upload/v1778125459/v1_rvifo5.mp4' },
  { src: 'https://res.cloudinary.com/dq6ssao8d/video/upload/v1778125471/v2_onzy5u.mp4' },
  { src: 'https://res.cloudinary.com/dq6ssao8d/video/upload/v1778125481/a1_t15vnz.mp4' }
]

export default function SeccionCumpleanos() {
  return (
    <div id="cumpleanos" className="section section-dark">

  
      <div className="section-subtitle">Celebraciones & Cumpleaños</div>
      <SectionDivider />

   
      <div className="birthday-card">
        <p className="birthday-text">
        Cada cumpleaños fue algo único. Eran días llenos de alegría, de risas y de momentos que reflejaban lo feliz que eras rodeado de amor.
        </p>
      </div>

      {/* FOTOS */}
      <div className="gallery" style={{ marginTop: 20 }}>
        {GALLERY_ITEMS.map((item, i) => (
          <div key={i} className={`gallery-item${item.wide ? ' wide' : ''}`}>
            <img
              src={item.src}
              alt="cumpleaños"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 'inherit'
              }}
            />
          </div>
        ))}
      </div>

      {/* 🎥 VIDEOS */}
      <div style={{ marginTop: 50 }}>
        <div className="section-subtitle">Momentos en Video</div>

        <div className="video-gallery">
          {VIDEOS.map((video, i) => (
            <div key={i} className="video-item">
              <video
                src={video.src}
                controls
                playsInline
              />
            </div>
          ))}
        </div>
      </div>

      <SectionDivider />
    </div>
  )
}