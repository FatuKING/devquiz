import { IoMdPerson } from 'react-icons/io'
import { PiGithubLogoFill } from 'react-icons/pi'
import { GrLinkedinOption } from 'react-icons/gr'

export function Form () {
  return (
    <>
      <article className='flex gap-40'>
        <form action='' className='flex flex-col gap-4'>
          <div className='flex gap-4'>
            <label className='flex flex-col gap-2 text-xl text-light-text dark:text-dark-text bg-light-primary/20 dark:bg-dark-primary/20 p-4 rounded' htmlFor=''>
              Nombre
              <input className='p-2 rounded bg-transparent border-2 border-light-accent dark:border-dark-accent focus:outline-none' type='text' />
            </label>

            <label className='flex flex-col gap-2 text-xl text-light-text dark:text-dark-text bg-light-primary/20 dark:bg-dark-primary/20 p-4 rounded' htmlFor=''>
              Email
              <input className='p-2 rounded bg-transparent border-2 border-light-accent dark:border-dark-accent focus:outline-none' type='text' />
            </label>
          </div>

          <label className='flex flex-col gap-2 text-xl text-light-text dark:text-dark-text bg-light-primary/20 dark:bg-dark-primary/20 p-4 rounded' htmlFor=''>
            Mensaje
            <textarea className='h-60 rounded p-2 bg-transparent border-2 border-light-accent dark:border-dark-accent focus:outline-none' id='message' />
          </label>

          <input className='bg-transparent border border-light-primary text-light-text dark:text-dark-text p-2' type='submit' />
        </form>

        <address>
          <ul className='flex flex-col gap-8'>
            <li className='flex flex-col text-xl text-light-text dark:text-dark-text gap-4'>
              Email
              <a href='mailto:contact@cozzanifacundo.com'>contact@cozzanifacundo.com</a>
            </li>

            <li className='flex flex-col text-xl text-light-text dark:text-dark-text gap-4'>
              Teléfono: <a href=''>+54 9 1155709631</a>
            </li>

            <li className='flex flex-col text-xl text-light-text dark:text-dark-text gap-4'>
              Social:
              <div className='flex gap-4'>
                <a href='' className='bg-light-secondary p-1 rounded-lg text-3xl' target='_blank'><PiGithubLogoFill className='text-light-text dark:text-dark-text' /></a>
                <a href='' className='bg-light-secondary p-1 rounded-lg text-3xl' target='_blank'><GrLinkedinOption className='text-light-text dark:text-dark-text' /></a>
                <a href='' className='bg-light-secondary p-1 rounded-lg text-3xl' target='_blank'><IoMdPerson className='text-light-text dark:text-dark-text' /></a>
              </div>
            </li>
          </ul>
        </address>
      </article>
    </>
  )
}
