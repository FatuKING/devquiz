import { IoMdPerson, IoMdMail } from 'react-icons/io'
import { PiGithubLogoFill } from 'react-icons/pi'
import { GrLinkedinOption } from 'react-icons/gr'
import { FaPhoneAlt } from 'react-icons/fa'

export function Form () {
  return (
    <>
      <article className='flex flex-col sm:flex-row gap-10 lg:gap-10'>
        <form action='' className='flex flex-col gap-4 text-light-text dark:text-dark-text w-11/12 sm:w-4/5 md:w-1/2'>
          <div className='flex flex-col gap-4 md:text-xl text-light-title dark:text-dark-title font-medium'>
            <label className='flex flex-col gap-2' htmlFor=''>
              <input className='p-2 rounded dark:text-dark-text text-light-text bg-light-bgSecondary dark:bg-dark-card focus:outline-none shadow-sm' placeholder='Nombre completo' type='text' />
            </label>

            <label className='flex flex-col gap-2' htmlFor=''>
              <input className='p-2 rounded dark:text-dark-text text-light-text bg-light-bgSecondary dark:bg-dark-card focus:outline-none shadow-sm' placeholder='Email' type='text' />
            </label>
          </div>

          <label className='flex flex-col gap-2 lg:text-lg md:text-xl rounded text-light-title dark:text-dark-title font-medium' htmlFor=''>
            <textarea className='h-32 rounded p-2 dark:text-dark-text text-light-text bg-light-bgSecondary dark:bg-dark-card focus:outline-none shadow ' id='message' placeholder='Mensaje' />
          </label>

          <input className='bg-light-button dark:bg-dark-button text-light-buttonText dark:text-dark-buttonText p-2 lg:text-lg xl:text-xl font-semibold cursor-pointer' type='submit' />
        </form>

        <address className='h-full text-light-text dark:text-dark-text'>
          <ul className='flex flex-col gap-3 md:text-xl text-light-title dark:text-dark-title font-medium'>
            Contacto:
            <li className='flex gap-2 text-lg items-center'>
              <IoMdMail className='text-light-button dark:text-dark-button' /> <a className='hover:underline text-light-paragraph dark:text-dark-paragraph' href='mailto:contact@cozzanifacundo.com'>contact@cozzanifacundo.com</a>
            </li>

            <li className='flex gap-2 text-lg items-center'>
              <FaPhoneAlt className='text-light-button dark:text-dark-button' /> <a className='hover:underline text-light-paragraph dark:text-dark-paragraph' href='phone:+5491155709631'>+54 9 1155709631</a>
            </li>

            <li className='flex flex-col gap-4'>
              Social:
              <div className='flex gap-4'>
                <a href='https://github.com/fatuking/' className='bg-light-button dark:bg-dark-button p-2 rounded-full text-2xl hover:scale-105' target='_blank' rel='noreferrer'><PiGithubLogoFill className='text-light-buttonText dark:text-dark-buttonText' /></a>
                <a href='https://www.linkedin.com/in/facundocozzani/' className='bg-light-button dark:bg-dark-button p-2 rounded-full text-2xl hover:scale-105' target='_blank' rel='noreferrer'><GrLinkedinOption className='text-light-buttonText dark:text-dark-buttonText' /></a>
                <a href='https://www.cozzanifacundo.com/' className='bg-light-button dark:bg-dark-button p-2 rounded-full text-2xl hover:scale-105' target='_blank' rel='noreferrer'><IoMdPerson className='text-light-buttonText dark:text-dark-buttonText' /></a>
              </div>
            </li>
          </ul>
        </address>
      </article>
    </>
  )
}
