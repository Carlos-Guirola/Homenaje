import { useState } from 'react'

import Portada             from './components/Portada'
import Nav                 from './components/Nav'
import HeroInicio          from './components/HeroInicio'
import SeccionRecuerdos    from './components/SeccionRecuerdos'
import SeccionCumpleanos   from './components/SeccionCumpleanos'
import SeccionEscuela      from './components/SeccionEscuela'
import SeccionFuneral      from './components/SeccionFuneral'

import SeccionVideos       from './components/SeccionVideos'
import SeccionFrases       from './components/SeccionFrases'
import SeccionComentarios  from './components/SeccionComentarios'
import SeccionFinal        from './components/SeccionFinal'

export default function App() {
  const [entered, setEntered] = useState(false)

  if (!entered) {
    return <Portada onEnter={() => setEntered(true)} />
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0806' }}>
      <Nav />

      <HeroInicio />
      <SeccionRecuerdos />
      <SeccionCumpleanos />
      <SeccionEscuela />
      <SeccionFuneral />
    
      <SeccionVideos />
      <SeccionFrases />
      <SeccionComentarios />
      <SeccionFinal />
    </div>
  )
}
