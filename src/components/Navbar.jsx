import { NavLink } from 'react-router-dom'
import { FaHome, FaClipboardList, FaAddressBook } from 'react-icons/fa'
import { IoGameController } from 'react-icons/io5'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { NavbarToggle } from './NavbarToggle.jsx'
import { Tooltip } from 'react-tooltip'
import { useThemes } from '../hooks/useThemes.js'

export function Navbar () {
  const { modeSwitch, darkMode } = useThemes()

  return (
    <>
      <header className='w-20 h-full bg-transparent'>
        <nav className='items-center p-6 h-full flex flex-col pt-10 gap-60'>
          <div className='flex gap-4 items-center'>
            <NavbarToggle />
          </div>

          <ul className='flex flex-col gap-4 text-2xl text-light-text dark:text-dark-text'>
            <li className='font-semibold'>
              <NavLink
                to='/'
                className={({ isActive }) => isActive ? 'flex gap-3 items-center text-purple-500 dark:text-purple-800' : 'flex gap-3 items-center  hover:text-purple-500 hover:dark:text-purple-800'}
              >
                <FaHome className='text-3xl' data-tooltip-id='home' data-tooltip-content='Inicio' data-tooltip-place='right' />
                <Tooltip style={{ fontSize: '16px' }} id='home' />
              </NavLink>
            </li>

            <li className='font-semibold'>
              <NavLink
                to='/game'
                className={({ isActive }) => isActive ? 'flex gap-3 items-center text-purple-500 dark:text-purple-800' : 'flex gap-3 items-center  hover:text-purple-500 hover:dark:text-purple-800'}
              >
                <IoGameController className='text-3xl' data-tooltip-id='game' data-tooltip-content='Jugar' data-tooltip-place='right' />
                <Tooltip style={{ fontSize: '16px' }} id='game' />
              </NavLink>
            </li>

            <li className='font-semibold'>
              <NavLink
                to='/ranking'
                className={({ isActive }) => isActive ? 'flex gap-3 items-center text-purple-500 dark:text-purple-800' : 'flex gap-3 items-center  hover:text-purple-500 hover:dark:text-purple-800'}
              >
                <FaClipboardList className='text-3xl' data-tooltip-id='ranking' data-tooltip-content='Ranking' data-tooltip-place='right' />
                <Tooltip style={{ fontSize: '16px' }} id='ranking' />
              </NavLink>
            </li>

            <li className='font-semibold'>
              <NavLink
                to='/contact'
                className={({ isActive }) => isActive ? 'flex gap-3 items-center text-purple-500 dark:text-purple-800' : 'flex gap-3 items-center  hover:text-purple-500 hover:dark:text-purple-800'}
              >
                <FaAddressBook className='text-3xl' data-tooltip-id='contact' data-tooltip-content='Contacto' data-tooltip-place='right' />
                <Tooltip style={{ fontSize: '16px' }} id='contact' />
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
