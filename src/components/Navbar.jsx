import { NavLink } from 'react-router-dom'
import { FaHome, FaClipboardList, FaAddressBook } from 'react-icons/fa'
import { IoGameController } from 'react-icons/io5'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { Tooltip } from 'react-tooltip'
import { useThemes } from '../hooks/useThemes.js'

export function Navbar () {
  const { modeSwitch, darkMode } = useThemes()

  return (
    <>
      <header className='w-full h-20 bg-transparent flex justify-center'>
        <nav className='flex justify-between items-center w-11/12'>
          <h2 className='text-4xl font-bold text-light-title dark:text-dark-title'>Devquiz</h2>

          <ul className='flex gap-4 text-light-title dark:text-dark-title'>
            <li className='font-semibold'>
              <NavLink
                to='/'
                className={({ isActive }) => isActive ? 'flex gap-3 items-center text-light-button dark:text-dark-button' : 'flex gap-3 items-center  hover:text-light-button hover:dark:text-dark-button'}
              >
                <FaHome className='text-4xl' data-tooltip-id='home' data-tooltip-content='Inicio' data-tooltip-place='bottom' />
                <Tooltip style={{ fontSize: '16px' }} id='home' />
              </NavLink>
            </li>

            <li className='font-semibold'>
              <NavLink
                to='/game'
                className={({ isActive }) => isActive ? 'flex gap-3 items-center text-light-button dark:text-dark-button' : 'flex gap-3 items-center  hover:text-light-button hover:dark:text-dark-button'}
              >
                <IoGameController className='text-4xl' data-tooltip-id='game' data-tooltip-content='Jugar' data-tooltip-place='bottom' />
                <Tooltip style={{ fontSize: '16px' }} id='game' />
              </NavLink>
            </li>

            <li className='font-semibold'>
              <NavLink
                to='/ranking'
                className={({ isActive }) => isActive ? 'flex gap-3 items-center text-light-button dark:text-dark-button' : 'flex gap-3 items-center hover:text-light-button hover:dark:text-dark-button'}
              >
                <FaClipboardList className='text-4xl' data-tooltip-id='ranking' data-tooltip-content='Ranking' data-tooltip-place='bottom' />
                <Tooltip style={{ fontSize: '16px' }} id='ranking' />
              </NavLink>
            </li>

            <li className='font-semibold'>
              <NavLink
                to='/contact'
                className={({ isActive }) => isActive ? 'flex gap-3 items-center text-light-button dark:text-dark-button' : 'flex gap-3 items-center  hover:text-light-button hover:dark:text-dark-button'}
              >
                <FaAddressBook className='text-4xl' data-tooltip-id='contact' data-tooltip-content='Contacto' data-tooltip-place='bottom' />
                <Tooltip style={{ fontSize: '16px' }} id='contact' />
              </NavLink>
            </li>
          </ul>

          <button className='text-4xl text-light-title dark:text-dark-title' onClick={modeSwitch}>
            {darkMode ? <MdDarkMode /> : <MdLightMode />}
          </button>
        </nav>
      </header>
    </>
  )
}
