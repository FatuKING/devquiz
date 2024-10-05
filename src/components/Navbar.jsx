import { NavLink } from 'react-router-dom'
import { FaHome, FaClipboardList, FaBook, FaAddressBook } from 'react-icons/fa'
import { IoGameController } from 'react-icons/io5'
import { NavbarToggle } from './NavbarToggle'
import { Tooltip } from 'react-tooltip'
import { useNavStore } from '../hooks/useNavStore'

export function Navbar () {
  const { isOpen, toggleMenu } = useNavStore()

  return (
    <>
      <header className={`${isOpen ? 'w-20 transition-width duration-0 ease-in-out' : 'w-60 transition-width duration-200 ease-out'} h-full bg-cyan-950`}>
        <nav className={`${isOpen ? 'items-center' : 'p-6'} h-full flex flex-col pt-10 gap-60`}>
          <div className='flex gap-4 items-center'>
            <NavbarToggle toggleMenu={toggleMenu} />

            <h1 className={`${isOpen ? 'hidden duration-0' : 'block duration-1000'} text-4xl font-bold transition-all ease-in`}>DevQuiz</h1>
          </div>

          <ul className='flex flex-col gap-4'>
            <li className='text-3xl font-semibold'>
              <NavLink
                to='/'
                className={({ isActive }) => isActive ? 'flex gap-3 items-center text-green-600' : 'flex gap-3 items-center hover:text-green-600'}
              >
                <FaHome data-tooltip-id='home' data-tooltip-content='Inicio' data-tooltip-place='right' /> <span className={`${isOpen ? 'hidden' : 'block'}`}>Inicio</span>
                {isOpen ? <Tooltip style={{ fontSize: '14px' }} id='home' /> : null}
              </NavLink>
            </li>

            <li className='text-3xl font-semibold'>
              <NavLink
                to='/game'
                className={({ isActive }) => isActive ? 'flex gap-3 items-center text-green-600' : 'flex gap-3 items-center hover:text-green-600'}
              >
                <IoGameController data-tooltip-id='game' data-tooltip-content='Jugar' data-tooltip-place='right' /> <span className={`${isOpen ? 'hidden' : 'block'}`}>Jugar</span>
                {isOpen ? <Tooltip style={{ fontSize: '14px' }} id='game' /> : null}
              </NavLink>
            </li>

            <li className='text-3xl font-semibold'>
              <NavLink
                to='/ranking'
                className={({ isActive }) => isActive ? 'flex gap-3 items-center text-green-600' : 'flex gap-3 items-center hover:text-green-600'}
              >
                <FaClipboardList data-tooltip-id='ranking' data-tooltip-content='Ranking' data-tooltip-place='right' /> <span className={`${isOpen ? 'hidden' : 'block'}`}>Ranking</span>
                {isOpen ? <Tooltip style={{ fontSize: '14px' }} id='ranking' /> : null}
              </NavLink>
            </li>

            <li className='text-3xl font-semibold'>
              <NavLink
                to='/material'
                className={({ isActive }) => isActive ? 'flex gap-3 items-center text-green-600' : 'flex gap-3 items-center hover:text-green-600'}
              >
                <FaBook data-tooltip-id='material' data-tooltip-content='Material' data-tooltip-place='right' /> <span className={`${isOpen ? 'hidden' : 'block'}`}>Material</span>
                {isOpen ? <Tooltip style={{ fontSize: '14px' }} id='material' /> : null}
              </NavLink>
            </li>

            <li className='text-3xl font-semibold'>
              <NavLink
                to='/contact'
                className={({ isActive }) => isActive ? 'flex gap-3 items-center text-green-600' : 'flex gap-3 items-center hover:text-green-600'}
              >
                <FaAddressBook data-tooltip-id='contact' data-tooltip-content='Contacto' data-tooltip-place='right' /> <span className={`${isOpen ? 'hidden' : 'block'}`}>Contacto</span>
                {isOpen ? <Tooltip style={{ fontSize: '14px' }} id='contact' /> : null}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
