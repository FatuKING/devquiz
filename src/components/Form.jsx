import { IoMdPerson } from 'react-icons/io'
import { PiGithubLogoFill } from 'react-icons/pi'
import { GrLinkedinOption } from 'react-icons/gr'

export function Form () {
  return (
    <>
      <article className='flex items-center gap-40'>
        <form action='' className='flex flex-col gap-4 text-light-text dark:text-dark-text'>
          <div className='flex gap-4 text-2xl'>
            <label className='flex flex-col gap-2' htmlFor=''>
              Nombre
              <input className='p-2 rounded bg-transparent border-2  focus:outline-none' type='text' />
            </label>

            <label className='flex flex-col gap-2' htmlFor=''>
              Email
              <input className='p-2 rounded bg-transparent border-2  focus:outline-none' type='text' />
            </label>
          </div>

          <label className='flex flex-col gap-2 text-2xl rounded' htmlFor=''>
            Mensaje
            <textarea className='h-60 rounded p-2 bg-transparent border-2 focus:outline-none' id='message' />
          </label>

          <input className='bg-purple-800 p-2 text-2xl cursor-pointer' type='submit' />
        </form>

        <address className='h-full'>
          <ul className='flex flex-col gap-8 text-2xl'>
            <li className='flex flex-col gap-4'>
              Email:
              <a href='mailto:contact@cozzanifacundo.com'>contact@cozzanifacundo.com</a>
            </li>

            <li className='flex flex-col gap-4'>
              Teléfono: <a href=''>+54 9 1155709631</a>
            </li>

            <li className='flex flex-col gap-4'>
              Social:
              <div className='flex gap-4'>
                <a href='' className='bg-purple-800 p-2 rounded-lg text-xl hover:scale-105' target='_blank'><PiGithubLogoFill className='text-light-text dark:text-dark-text' /></a>
                <a href='' className='bg-purple-800 p-2 rounded-lg text-xl hover:scale-105' target='_blank'><GrLinkedinOption className='text-light-text dark:text-dark-text' /></a>
                <a href='' className='bg-purple-800 p-2 rounded-lg text-xl hover:scale-105' target='_blank'><IoMdPerson className='text-light-text dark:text-dark-text' /></a>
              </div>
            </li>
          </ul>
        </address>
      </article>
    </>
  )
}
