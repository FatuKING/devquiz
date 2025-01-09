import { Footer } from '../components/Footer.jsx'
import { Form } from '../components/Form.jsx'
import { Navbar } from '../components/Navbar.jsx'
import { TextBlock } from '../components/TextBlock.jsx'

export function Contact () {
  return (
    <>
      <main className='flex flex-col gap-10 w-full h-full bg-light-background dark:bg-dark-background'>
        <Navbar />
        <section className='flex justify-center items-center w-11/12'>
          <div className='flex flex-col gap-10 w-10/12 sm:w-11/12  lg:justify-center'>
            <TextBlock
              title='¡¡Cuenta tu experiencia!!'
              text='Tu opinión es clave. Cuéntanos cómo ha sido tu experiencia utilizando DevQuiz.'
            />

            <Form />
          </div>

        </section>
        <Footer />
      </main>
    </>
  )
}
