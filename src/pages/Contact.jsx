import { Form } from '../components/Form.jsx'
import { Navbar } from '../components/Navbar.jsx'
import { TextBlock } from '../components/TextBlock.jsx'

export function Contact () {
  return (
    <>
      <main className='flex w-full h-full bg-gradient-to-r from-slate-100 to-slate-300 dark:from-slate-900 dark:to-slate-950'>
        <Navbar />
        <section className='flex justify-center items-center ml-40 w-3/4'>
          <div className='flex flex-col gap-20'>
            <TextBlock
              title='¡¡Cuenta tu experiencia!!'
              text='Tu opinión es clave. Cuéntanos cómo ha sido tu experiencia utilizando DevQuiz.'
            />

            <Form />
          </div>

        </section>
      </main>
    </>
  )
}
