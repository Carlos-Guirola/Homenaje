

import SectionDivider from './SectionDivider'


const PHRASES = [
  {
    text: `DIEGUITO POR SIEMPRE

Te extrañaremos.

Hoy mi corazón llora y el de todos los que te conocían,
porque tu ausencia dejará un vacío inmenso, pero también un legado
de amor, amistad y recuerdos que nunca olvidaremos.
Diego...`,
    author: 'Tus compañeros',
  },

  {
    text: `De Issac para mi gran amigo Diego:

Día a día crecía nuestra amistad,
imaginaba que por delante había una meta que alcanzar,
entre risas y esfuerzos que, gracias a nuestro Creador,
soñábamos poder realizar, pero ahora pienso...
qué difícil es saber que ya no estás.

Diego, descansa en paz. Una amistad que dura toda la vida.`,
    author: 'Isaac',
  },

  {
    text: `Descansa en paz amigo.

Hoy mi corazón llora y el de todos los que te conocían,
porque tu ausencia deja un vacío inmenso,
pero también un regalo de amor, amistad y recuerdos
que nunca olvidaremos.`,
    author: 'Compañeros',
  },

  {
    text: `Me hubiera gustado disfrutar más contigo,
pero lastimosamente no se pudo mi bro.

Gracias por las risas, gracias por compartir todo el tiempo con nosotros.
Te extrañaré cada día. Nunca te olvidaré.
Cuídame desde el cielo.
Esto no es un adiós, es un hasta pronto.`,
    author: 'Un amigo',
  },

  {
    text: `Solo nos queda el recuerdo de que fuiste un gran amigo en vida.
Siempre te recordaremos por como fuiste.
Vuela alto compañero.`,
    author: 'Compañeros',
  },

  {
    text: `Gracias Diego por ser mi amigo,
desde tercero estuviste con nosotros.
Fuiste una persona muy amable y un gran amigo.
Lo siento mucho por tu familia.`,
    author: 'Compañero',
  },

  {
    text: `Vuela alto compañero amigo mío.
Gracias por tu amistad, por las risas y los momentos compartidos.`,
    author: 'Compañero',
  },

  {
    text: `Te vamos a extrañar compañero Diego.
Querido, te vamos a hacer mucha falta.`,
    author: 'Compañeros',
  },

  {
    text: `Amigo Diego, nunca imaginé que te fueras para el cielo.
Nos conocimos desde chiquitos.
Siempre vivirás en nuestros corazones.`,
    author: 'Amigo de infancia',
  },

  {
    text: `Amigo, te voy a extrañar más de lo que puedo decir.
A tu lado nunca faltaron las risas ni la compañía sincera.
Me enseñaste cosas que nunca olvidaré.
Te llevaré conmigo siempre.`,
    author: 'Amigo',
  },

  {
    text: `Hoy me duele despedirte, pero sé que vuelves a casa, libre en luz.
Hasta volvernos a ver, amigo.`,
    author: 'Compañero',
  },

  {
    text: `Por ese gran amigo que hoy ya no está.
Se fue sin despedirse, pero vivirá en mi corazón por siempre.`,
    author: 'Compañero',
  },

  {
    text: `Una parte de Diego quedará en nuestros corazones y nunca será olvidado.
Dejas una gran huella en todos nosotros.`,
    author: 'Compañeros',
  },
]

export default function SeccionFrases() {
  return (
    <section id="frases" className="section section-dark">
      <div className="section-title"></div>
      <div className="section-subtitle">Cartas de Estudiantes</div>

      <SectionDivider />

      <div className="messages-wrapper">
        {PHRASES.map((p, i) => (
          <div key={i} className="message-card fade-up">
            <p className="message-text">{p.text}</p>
            <p className="message-author">— {p.author}</p>
          </div>
        ))}
      </div>

      <SectionDivider />
    </section>
  )
}