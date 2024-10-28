import { NavLink } from 'react-router-dom'
import { FaHome, FaClipboardList, FaAddressBook } from 'react-icons/fa'
import { IoGameController } from 'react-icons/io5'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { NavbarToggle } from './NavbarToggle.jsx'
import { Tooltip } from 'react-tooltip'
import { useNavStore } from '../hooks/useNavStore.js'
import { useThemes } from '../hooks/useThemes.js'

export function Navbar () {
  const { isOpen, toggleMenu } = useNavStore()
  const { modeSwitch, darkMode } = useThemes()

  return (
    <>
      <header className={`${isOpen ? 'w-20' : 'w-60'} h-full bg-transparent`}>
        <nav className={`${isOpen ? 'items-center' : 'p-6'} h-full flex flex-col pt-10 gap-60`}>
          <div className='flex gap-4 items-center'>
            <NavbarToggle toggleMenu={toggleMenu} />

            <h1 className={`${isOpen ? 'hidden duration-0' : 'block'} text-4xl font-bold transition-all ease-in text-light-text dark:text-dark-text`}>DevQuiz</h1>
          </div>

          <ul className='flex flex-col gap-4 text-light-text dark:text-dark-text'>
            <li className='text-3xl font-semibold'>
              <NavLink
                to='/'
                className={({ isActive }) => isActive ? 'flex gap-3 items-center text-light-accent dark:text-dark-accent' : 'flex gap-3 items-center  hover:text-light-accent hover:dark:text-dark-accent'}
              >
                <FaHome data-tooltip-id='home' data-tooltip-content='Inicio' data-tooltip-place='right' /> <span className={`${isOpen ? 'hidden' : 'block'}`}>Inicio</span>
                {isOpen ? <Tooltip style={{ fontSize: '14px' }} id='home' /> : null}
              </NavLink>
            </li>

            <li className='text-3xl font-semibold'>
              <NavLink
                to='/game'
                className={({ isActive }) => isActive ? 'flex gap-3 items-center text-light-accent dark:text-dark-accent' : 'flex gap-3 items-center  hover:text-light-accent hover:dark:text-dark-accent'}
              >
                <IoGameController data-tooltip-id='game' data-tooltip-content='Jugar' data-tooltip-place='right' /> <span className={`${isOpen ? 'hidden' : 'block'}`}>Jugar</span>
                {isOpen ? <Tooltip style={{ fontSize: '14px' }} id='game' /> : null}
              </NavLink>
            </li>

            <li className='text-3xl font-semibold'>
              <NavLink
                to='/ranking'
                className={({ isActive }) => isActive ? 'flex gap-3 items-center text-light-accent dark:text-dark-accent' : 'flex gap-3 items-center  hover:text-light-accent hover:dark:text-dark-accent'}
              >
                <FaClipboardList data-tooltip-id='ranking' data-tooltip-content='Ranking' data-tooltip-place='right' /> <span className={`${isOpen ? 'hidden' : 'block'}`}>Ranking</span>
                {isOpen ? <Tooltip style={{ fontSize: '14px' }} id='ranking' /> : null}
              </NavLink>
            </li>

            <li className='text-3xl font-semibold'>
              <NavLink
                to='/contact'
                className={({ isActive }) => isActive ? 'flex gap-3 items-center text-light-accent dark:text-dark-accent' : 'flex gap-3 items-center  hover:text-light-accent hover:dark:text-dark-accent'}
              >
                <FaAddressBook data-tooltip-id='contact' data-tooltip-content='Contacto' data-tooltip-place='right' /> <span className={`${isOpen ? 'hidden' : 'block'}`}>Contacto</span>
                {isOpen ? <Tooltip style={{ fontSize: '14px' }} id='contact' /> : null}
              </NavLink>
            </li>
          </ul>

          <button className='text-3xl text-light-text dark:text-dark-text' onClick={modeSwitch}>
            {darkMode ? <MdDarkMode /> : <MdLightMode />}
          </button>
        </nav>
      </header>
    </>
  )
}
