import { IoMdPerson, IoMdMail } from 'react-icons/io'
import { PiGithubLogoFill } from 'react-icons/pi'
import { GrLinkedinOption } from 'react-icons/gr'
import { FaPhoneAlt } from 'react-icons/fa'

export function Form () {
  return (
    <>
      <article className='flex flex-col sm:flex-row gap-10 lg:gap-20'>
        <form action='' className='flex flex-col gap-4 text-light-text dark:text-dark-text w-11/12 sm:w-4/5 md:w-1/2 xl:w-2/5 2xl:w-1/3'>
          <div className='flex flex-col gap-4 md:text-xl text-light-title dark:text-dark-title font-medium'>
            <label className='flex flex-col gap-2' htmlFor=''>
              Nombre
              <input className='p-2 rounded dark:text-dark-text text-light-text bg-white/30 dark:bg-dark-card focus:outline-none shadow-sm shadow-light-button dark:shadow-dark-button' type='text' />
            </label>

            <label className='flex flex-col gap-2' htmlFor=''>
              Email
              <input className='p-2 rounded dark:text-dark-text text-light-text bg-white/30 dark:bg-dark-card focus:outline-none shadow-sm shadow-light-button dark:shadow-dark-button' type='text' />
            </label>
          </div>

          <label className='flex flex-col gap-2 lg:text-lg md:text-xl rounded text-light-title dark:text-dark-title font-medium' htmlFor=''>
            Mensaje
            <textarea className='h-32 rounded p-2 dark:text-dark-text text-light-text bg-white/30 dark:bg-dark-card focus:outline-none shadow-sm shadow-light-button dark:shadow-dark-button' id='message' />
          </label>

          <input className='bg-light-button dark:bg-dark-button text-light-buttonText dark:text-dark-buttonText p-2 lg:text-lg xl:text-xl font-semibold cursor-pointer' type='submit' />
        </form>

        <address className='h-full text-light-text dark:text-dark-text'>
          <ul className='flex flex-col gap-3 md:text-xl text-light-title dark:text-dark-title font-medium'>
            Contacto:
            <li className='flex gap-2 text-xl items-center'>
              <IoMdMail className='text-light-button dark:text-dark-button' /> <a className='hover:underline text-light-paragraph dark:text-dark-paragraph' href='mailto:contact@cozzanifacundo.com'>contact@cozzanifacundo.com</a>
            </li>

            <li className='flex gap-2 text-xl items-center'>
              <FaPhoneAlt className='text-light-button dark:text-dark-button' /> <a className='hover:underline text-light-paragraph dark:text-dark-paragraph' href=''>+54 9 1155709631</a>
            </li>

            <li className='flex flex-col gap-4'>
              Social:
              <div className='flex gap-4'>
                <a href='' className='bg-light-button dark:bg-dark-button p-2 rounded-full text-2xl hover:scale-105' target='_blank'><PiGithubLogoFill className='text-light-buttonText dark:text-dark-buttonText' /></a>
                <a href='' className='bg-light-button dark:bg-dark-button p-2 rounded-full text-2xl hover:scale-105' target='_blank'><GrLinkedinOption className='text-light-buttonText dark:text-dark-buttonText' /></a>
                <a href='' className='bg-light-button dark:bg-dark-button p-2 rounded-full text-2xl hover:scale-105' target='_blank'><IoMdPerson className='text-light-buttonText dark:text-dark-buttonText' /></a>
              </div>
            </li>
          </ul>
        </address>
      </article>
    </>
  )
}
