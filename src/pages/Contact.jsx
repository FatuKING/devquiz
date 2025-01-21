import { Footer } from '../components/Footer.jsx'
import { Form } from '../components/Form.jsx'
import { Navbar } from '../components/Navbar.jsx'
import { TextBlock } from '../components/TextBlock.jsx'
import { PiGithubLogoFill } from 'react-icons/pi'

export function Contact () {
  return (
    <>
      <main className='flex flex-col gap-10 w-full h-full bg-light-background dark:bg-dark-background'>
        <Navbar />
        <div className='flex justify-center items-center w-full pt-10'>
          <section className='flex justify-between  w-11/12'>
            <article className='flex flex-col gap-8 w-2/5'>
              <TextBlock
                title='¡¡Cuenta tu experiencia!!
                '
                text='Tu opinión es clave. Cuéntanos cómo ha sido tu experiencia utilizando DevQuiz.'
              />

              <Form />
            </article>

            <article className='flex flex-col items-center gap-16 w-1/2'>
              <TextBlock
                props='justify-center items-center text-center'
                title='Proximas Actualización'
                text='Actualmente estamos desarrollando nuevas funcionalidades, como categorías ampliadas, opciones de registro de usuarios, recursos de estudio y la traducción a varios idiomas, todo pensado para que aproveches al máximo tu experiencia de aprendizaje.'
              />

              <TextBlock
                props='justify-center items-center text-center'
                title='Contribuye al Proyecto'
                text='DevQuiz es un proyecto open source y nos encantaría contar con tu ayuda para mejorarlo. ¿Tienes una idea o quieres contribuir con código?'
              />

              <div className='flex justify-center items-center gap-4 border border-light-button dark:border-dark-button hover:bg-light-button hover:dark:bg-dark-button bg-transparent text-light-title hover:text-light-buttonText dark:text-dark-buttonText p-2 lg:text-lg xl:text-xl font-semibold w-1/3 cursor-pointer rounded'>
                <PiGithubLogoFill /> <a className='' href='https://github.com/FatuKING/devquiz' target='_blank' rel='noreferrer'>¡Únete al proyecto!</a>
              </div>

            </article>
          </section>
        </div>
        <Footer />
      </main>
    </>
  )
}
