import { Form } from '../components/Form.jsx'
import { Navbar } from '../components/Navbar.jsx'
import { TextBlock } from '../components/TextBlock.jsx'

export function Contact () {
  return (
    <>
      <main className='flex w-full h-full bg-gradient-to-r from-slate-300 to-slate-400 dark:from-slate-800 dark:to-slate-900'>
        <Navbar />
        <section className='flex justify-center flex-col ml-40 w-3/4 gap-20'>
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
