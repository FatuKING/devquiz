import { Form } from '../components/Form.jsx'
import { Navbar } from '../components/Navbar.jsx'
import { TextBlock } from '../components/TextBlock.jsx'

export function Contact () {
  return (
    <>
      <Navbar />
      <main className='flex justify-center w-full h-full bg-light-background dark:bg-dark-background'>
        <section className='flex flex-col pt-20 w-3/4 gap-20'>
          <TextBlock
            title='¡¡Cuentas tu experiencia!!'
            text='Tu opinión es clave. Cuéntanos cómo ha sido tu experiencia utilizando DevQuiz.'
          />

          <Form />
        </section>
      </main>
    </>
  )
}
