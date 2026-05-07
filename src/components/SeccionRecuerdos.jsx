import SectionDivider from './SectionDivider'
const GALLERY_SECTIONS = [
  {
    title: 'Infancia',
    text: `Desde pequeño se notaba que era alguien especial.

Siempre fue un niño tranquilo, respetuoso y con una forma de ser que hacía sentir bien a los demás sin necesidad de decir mucho.

Quienes lo conocieron desde esa etapa guardan recuerdos bonitos de alguien que transmitía paz y una bondad muy sincera.`,
    items: [
      { src: '/media/fotos/a1.png' },
      { src: '/media/fotos/a2.png' },
      { src: '/media/fotos/a3.png' },
      { src: '/media/fotos/a4.jpg' },
      { src: '/media/fotos/a5.jpg' },
      { src: '/media/fotos/a6.jpg' },
      { src: '/media/fotos/a7.jpg' },
      { src: '/media/fotos/a8.jpg' },
    ]
  },

  {
    title: 'Adolescencia',
    text: `En esa etapa era de esas personas que fácilmente ganaban el cariño de todos.

Siempre había risas, momentos compartidos y una amistad sincera que se sentía real.

Los que estuvieron cerca lo recuerdan como un buen amigo, de esos que dejan huella sin necesidad de esforzarse.`,
    items: [
      { src: '/media/fotos/b1.jpg' },
      { src: '/media/fotos/b2.jpg' },
      { src: '/media/fotos/b3.jpg' },
      { src: '/media/fotos/b4.jpg' },
      { src: '/media/fotos/b5.jpg' },
      { src: '/media/fotos/b6.jpg' },
    ]
  },

  {
    title: 'Momentos Especiales',
    text: `Son recuerdos que quedaron marcados.

Momentos simples, risas, conversaciones y experiencias que hoy se valoran más con el tiempo.

Todo eso forma parte de una historia que sigue presente, porque hay personas que, aunque ya no estén, nunca se van del todo.`,
    items: [
      { src: '/media/fotos/m1.jpg' },
      { src: '/media/fotos/m2.jpg' },
      { src: '/media/fotos/m6.jpg' },
      { src: '/media/fotos/m4.jpeg' },
      { src: '/media/fotos/m5.jpg', wide: true },
      { src: '/media/fotos/m3.jpg', wide: true },
    ]
  }
]

function GalleryItem({ src, wide }) {
  return (
    <div className={`gallery-item${wide ? ' wide' : ''}`}>
      <img
        src={src}
        alt="recuerdo"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: 'inherit'
        }}
      />
    </div>
  )
}

export default function SeccionRecuerdos() {
  return (
    <div id="recuerdos" className="section">

      <div className="section-subtitle">Su Historia en Imágenes</div>
      <SectionDivider />

      <p className="section-intro">
        Cada fotografía guarda un momento, una etapa de su vida que hoy recordamos con amor.
      </p>

      {/* 🔥 SECCIONES */}
      {GALLERY_SECTIONS.map((section, index) => (
        <div key={index} style={{ marginBottom: 50 }}>

          <div className="section-subtitle" style={{ marginTop: 30 }}>
            {section.title}
          </div>

          {/* 🔥 TEXTO NUEVO */}
          <p className="section-intro" style={{ marginTop: 10 }}>
            {section.text}
          </p>

          <div className="gallery">
            {section.items.map((item, i) => (
              <GalleryItem key={i} {...item} />
            ))}
          </div>

        </div>
      ))}

      <SectionDivider />
    </div>
  )
}