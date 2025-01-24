import { IoMdPerson, IoMdMail } from 'react-icons/io'
import { PiGithubLogoFill } from 'react-icons/pi'
import { GrLinkedinOption } from 'react-icons/gr'
import { FaPhoneAlt } from 'react-icons/fa'

export function Form () {
  return (
    <>
      <article className='flex flex-col sm:flex-row gap-10'>
        <form action='' className='flex flex-col gap-4 text-light-text dark:text-dark-text'>
          <div className='flex flex-col gap-4 text-lg 2xl:text-xl text-light-title dark:text-dark-title'>
            <label className='flex flex-col gap-2' htmlFor=''>
              <input className='w-96 p-2 rounded dark:text-dark-text text-light-text bg-light-bgSecondary dark:bg-dark-card focus:outline-none border border-light-bgSecondary dark:border-dark-bgSecondary placeholder:text-gray-500' placeholder='Nombre completo' type='text' />
            </label>

            <label className='flex flex-col gap-2' htmlFor=''>
              <input className='p-2 rounded dark:text-dark-text text-light-text bg-light-bgSecondary dark:bg-dark-card focus:outline-none border border-light-bgSecondary dark:border-dark-bgSecondary placeholder:text-gray-500' placeholder='Email' type='text' />
            </label>
          </div>

          <label className='flex flex-col gap-2 text-lg 2xl:text-xl rounded text-light-title dark:text-dark-title' htmlFor=''>
            <textarea className='h-32 rounded p-2 dark:text-dark-text text-light-text bg-light-bgSecondary dark:bg-dark-card focus:outline-none border border-light-bgSecondary dark:border-dark-bgSecondary placeholder:text-gray-500' id='message' placeholder='Mensaje' />
          </label>

          <input className='bg-light-button dark:bg-dark-button text-light-buttonText dark:text-dark-buttonText p-2 font-semibold cursor-pointer rounded text-base 2xl:text-xl' type='submit' />
        </form>

        <address className='h-full text-light-text dark:text-dark-text'>
          <ul className='flex flex-col gap-3 text-lg 2xl:text-xl text-light-title dark:text-dark-title font-medium'>
            Contacto:
            <li className='flex gap-2 text-base 2xl:text-lg items-center'>
              <IoMdMail className='text-light-button dark:text-dark-button' /> <a className='hover:underline text-light-paragraph dark:text-dark-paragraph' href='mailto:contact@cozzanifacundo.com'>contact@cozzanifacundo.com</a>
            </li>

            <li className='flex gap-2 text-base 2xl:text-lg items-center'>
              <FaPhoneAlt className='text-light-button dark:text-dark-button' /> <a className='hover:underline text-light-paragraph dark:text-dark-paragraph' href='phone:+5491155709631'>+54 9 1155709631</a>
            </li>

            <li className='flex flex-col gap-4'>
              Social:
              <div className='flex gap-4'>
                <a href='https://github.com/fatuking/' className='bg-light-button dark:bg-dark-button p-2 rounded-full text-xl 2xl:text-2xl hover:scale-105' target='_blank' rel='noreferrer'><PiGithubLogoFill className='text-light-buttonText dark:text-dark-buttonText' /></a>
                <a href='https://www.linkedin.com/in/facundocozzani/' className='bg-light-button dark:bg-dark-button p-2 rounded-full text-xl 2xl:text-2xl hover:scale-105' target='_blank' rel='noreferrer'><GrLinkedinOption className='text-light-buttonText dark:text-dark-buttonText' /></a>
                <a href='https://www.cozzanifacundo.com/' className='bg-light-button dark:bg-dark-button p-2 rounded-full text-xl 2xl:text-2xl hover:scale-105' target='_blank' rel='noreferrer'><IoMdPerson className='text-light-buttonText dark:text-dark-buttonText' /></a>
              </div>
            </li>
          </ul>
        </address>
      </article>
    </>
  )
}
