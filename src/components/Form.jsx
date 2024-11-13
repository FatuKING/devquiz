import { IoMdPerson } from 'react-icons/io'
import { PiGithubLogoFill } from 'react-icons/pi'
import { GrLinkedinOption } from 'react-icons/gr'

export function Form () {
  return (
    <>
      <article className='flex flex-col md:flex-row lg:items-center gap-10 lg:gap-20 xl:gap-40'>
        <form action='' className='flex flex-col gap-4 text-light-text dark:text-dark-text w-1/2'>
          <div className='flex gap-4 lg:text-xl xl:text-xl'>
            <label className='flex flex-col gap-2 w-1/2' htmlFor=''>
              Nombre
              <input className='p-2 rounded dark:text-dark-text text-light-text bg-white/30 dark:bg-black/30 focus:outline-none shadow-sm shadow-black dark:shadow-purple-800' type='text' />
            </label>

            <label className='flex flex-col gap-2 w-1/2' htmlFor=''>
              Email
              <input className='p-2 rounded dark:text-dark-text text-light-text bg-white/30 dark:bg-black/30 focus:outline-none shadow-sm shadow-black dark:shadow-purple-800' type='text' />
            </label>
          </div>

          <label className='flex flex-col gap-2 lg:text-lg xl:text-xl rounded' htmlFor=''>
            Mensaje
            <textarea className='h-32 md:h-60 rounded p-2 dark:text-dark-text text-light-text bg-white/30 dark:bg-black/30 focus:outline-none shadow-sm shadow-black dark:shadow-purple-800' id='message' />
          </label>

          <input className='bg-purple-500 dark:bg-purple-800 p-2 lg:text-lg xl:text-xl font-semibold cursor-pointer' type='submit' />
        </form>

        <address className='h-full text-light-text dark:text-dark-text'>
          <ul className='flex flex-col gap-8 md:text-xl xl:text-2xl'>
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
                <a href='' className='bg-purple-500 dark:bg-purple-800 p-2 rounded-lg text-2xl hover:scale-105' target='_blank'><PiGithubLogoFill className='text-light-text dark:text-dark-text' /></a>
                <a href='' className='bg-purple-500 dark:bg-purple-800 p-2 rounded-lg text-2xl hover:scale-105' target='_blank'><GrLinkedinOption className='text-light-text dark:text-dark-text' /></a>
                <a href='' className='bg-purple-500 dark:bg-purple-800 p-2 rounded-lg text-2xl hover:scale-105' target='_blank'><IoMdPerson className='text-light-text dark:text-dark-text' /></a>
              </div>
            </li>
          </ul>
        </address>
      </article>
    </>
  )
}
