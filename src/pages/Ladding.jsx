import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar.jsx'
import { TextBlock } from '../components/TextBlock.jsx'

export function Ladding () {
  return (
    <>
      <Navbar />
      <main className='flex justify-center w-full h-full bg-light-background dark:bg-dark-background'>
        <section className='flex flex-col pt-20 w-3/4 gap-20'>
          <article className='flex flex-col gap-10 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded p-4'>
            <TextBlock
              title='Desafía y Mejora tus Conocimientos'
              text='DevQuiz es un juego interactivo de preguntas y respuestas diseñado para que desarrolladores de todos los niveles puedan aprender y mejorar sus habilidades de una manera divertida. Con preguntas sobre diversos temas de desarrollo, tendrás la oportunidad de desafiar tus conocimientos mientras juegas y aprendes.'
            />

            <Link to='/game' className='bg-light-primary dark:bg-light-primary hover:dark:bg-dark-accent hover:bg-light-accent text-light-text rounded p-2 w-40 text-center font-semibold'>Empieza Ahora</Link>
          </article>

          <article className='flex flex-col gap-10 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded p-4'>
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
