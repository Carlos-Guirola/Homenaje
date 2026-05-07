import { useState, useEffect } from 'react'
import SectionDivider from './SectionDivider'

import { db } from '../firebase'
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore'

function formatDate(date) {
  const months = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
  const h = date.getHours()
  const m = date.getMinutes().toString().padStart(2, '0')
  const ampm = h < 12 ? 'am' : 'pm'
  const hh = (h % 12 || 12).toString().padStart(2, '0')
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} · ${hh}:${m} ${ampm}`
}

const CONSUELO_TEXTS = [
  {
    text: "Aquellos que amamos nunca mueren, solo se adelantan en el camino.",
    ref: "William Shakespeare"
  },
  {
    text: "El dolor es temporal, pero el amor que dejamos es eterno.",
    ref: "Anónimo"
  },
  {
    text: "Los que amamos nunca se van del todo, viven en cada recuerdo.",
    ref: "Rainer Maria Rilke"
  },
  {
    text: "La muerte no es el final, es solo un cambio de estado del amor.",
    
  }
]

export default function SeccionComentarios() {
  const [comments, setComments] = useState([])
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const q = query(collection(db, 'comentarios'), orderBy('createdAt', 'desc'))

    return onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    })
  }, [])

  const handleSubmit = async () => {
    if (!name.trim() || !text.trim()) return
    setLoading(true)

    try {
      await addDoc(collection(db, 'comentarios'), {
        name: name.trim(),
        text: text.trim(),
        date: formatDate(new Date()),
        createdAt: new Date()
      })

      setName('')
      setText('')
      setSuccess(true)
      setTimeout(() => setSuccess(false), 2500)
    } catch (e) {
      console.error(e)
    }

    setLoading(false)
  }

  return (
    <div id="comentarios" className="comments-wrapper">

      <div className="comments-section">

        <div className="comments-title">Libro de Condolencias</div>
        <div className="comments-subtitle">Palabras que permanecen en el alma</div>

        <SectionDivider />

     <div className="bible-section">
  <div className="bible-title">Frases de consuelo</div>

  {CONSUELO_TEXTS.map((b, i) => (
    <div key={i} className="bible-item">
      <p className="bible-text">“{b.text}”</p>
      <span className="bible-ref">{b.ref}</span>
    </div>
  ))}
</div>

        <SectionDivider />

        {/* FORMULARIO */}
        <div className="comment-form-modern">

          <input
            className="input-modern"
            placeholder="Tu nombre..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            className="textarea-modern"
            placeholder="Escribe tu mensaje..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="form-footer">
            <span className="counter">{text.length}/500</span>

            <button
              className="btn-modern"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Guardando...' : 'Dejar mensaje'}
            </button>
          </div>

          {success && (
            <div className="success-msg">✨ Mensaje guardado con amor</div>
          )}
        </div>

        {/* SEPARACIÓN CLARA */}
        <div className="section-gap" />

        <SectionDivider />

        {/* COMENTARIOS */}
        <div className="comments-list-modern">

          <div className="comments-count">
            — {comments.length} mensajes de amor —
          </div>

          {comments.map((c) => (
            <div key={c.id} className="comment-card">

              <div className="comment-top">
                <span className="comment-name">{c.name}</span>
                <span className="comment-date">{c.date}</span>
              </div>

              <p className="comment-text">{c.text}</p>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}