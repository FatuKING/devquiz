import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar.jsx'
import { TextBlock } from '../components/TextBlock.jsx'
import { Footer } from '../components/Footer.jsx'

export function Ladding () {
  return (
    <>
      <main className='flex flex-col gap-10 w-full h-full bg-light-background dark:bg-dark-background'>
        <Navbar />
        <section className='flex justify-center items-center w-full'>
          <article className='flex items-center w-11/12'>
            <div className='flex flex-col gap-10 w-2/3'>
                <TextBlock
                  title='Desafía y Mejora tus Conocimientos'
                  text='DevQuiz es un juego interactivo de preguntas y respuestas diseñado para que desarrolladores de todos los niveles puedan aprender y mejorar sus habilidades de una manera divertida. Con preguntas sobre diversos temas de desarrollo, tendrás la oportunidad de desafiar tus conocimientos mientras juegas y aprendes.'
                />
              

              <TextBlock
                title='¿Cómo funciona?'
                text='Responde preguntas técnicas: Aprende sobre temas como JavaScript, React, Bases de Datos, Algoritmos, y más.
                Mejora constantemente: Cuanto más juegues, más aprenderás. El juego está diseñado para ayudarte a repasar conceptos claves de programación.
                Contribuye a la comunidad: DevQuiz es un proyecto open source. Cualquiera puede sugerir preguntas nuevas, aportar mejoras, o corregir errores. ¡Tu conocimiento también puede ayudar a otros!'
              />

              <Link
                to='/game'
                className='text-light-buttonText dark:text-dark-buttonText bg-light-button dark:bg-dark-button rounded p-1 md:p-2 w-40 text-center font-semibold text-lg md:text-xl'
              >
                Empieza Ahora
              </Link>
            </div>

            <figure className=''>
              <img src="/assets.png" alt="" />
            </figure>
          </article>
 
        </section>
        <Footer />
      </main>

    </>
  )
}
