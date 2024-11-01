import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar.jsx'
import { TextBlock } from '../components/TextBlock.jsx'

export function Ladding () {
  return (
    <>
      <main className='flex w-full h-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900'>
        <Navbar />
        <section className='flex flex-col justify-center ml-40 w-3/4 gap-20'>
          <article className='flex flex-col gap-10'>
            <TextBlock
              title='Desafía y Mejora tus Conocimientos'
              text='DevQuiz es un juego interactivo de preguntas y respuestas diseñado para que desarrolladores de todos los niveles puedan aprender y mejorar sus habilidades de una manera divertida. Con preguntas sobre diversos temas de desarrollo, tendrás la oportunidad de desafiar tus conocimientos mientras juegas y aprendes.'
            />

            <Link to='/game' className='bg-light-primary dark:bg-purple-800 hover:dark:bg-purple-800/90 hover:bg-light-accent rounded p-2 w-40 text-center font-semibold'>Empieza Ahora</Link>
          </article>

          <article className='flex flex-col gap-10'>
            <TextBlock
              title='¿Cómo funciona?'
              text='Responde preguntas técnicas: Aprende sobre temas como JavaScript, React, Bases de Datos, Algoritmos, y más.
              Mejora constantemente: Cuanto más juegues, más aprenderás. El juego está diseñado para ayudarte a repasar conceptos claves de programación.
              Contribuye a la comunidad: DevQuiz es un proyecto open source. Cualquiera puede sugerir preguntas nuevas, aportar mejoras, o corregir errores. ¡Tu conocimiento también puede ayudar a otros!'
            />
          </article>
        </section>
      </main>
    </>
  )
}
