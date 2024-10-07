export function NavbarToggle ({ toggleMenu }) {
  return (
    <>
      <label className='flex flex-col gap-2 w-8'>
        <input className='peer hidden' type='checkbox' onClick={toggleMenu} />
        <div
          className='rounded-2xl h-[3px] w-1/2 bg-light-accent dark:bg-dark-accent duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]'
        />
        <div
          className='rounded-2xl h-[3px] w-full bg-light-accent dark:bg-dark-accent duration-500 peer-checked:-rotate-45'
        />
        <div
          className='rounded-2xl h-[3px] w-1/2 bg-light-accent dark:bg-dark-accent duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]'
        />
      </label>

    </>
  )
}