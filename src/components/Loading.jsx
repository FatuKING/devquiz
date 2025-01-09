export function Loading () {
  return (
    <>
      <div className='text-center'>
        <div
          className='w-16 h-16 border-4 border-dashed rounded-full animate-[spin_2s_linear_infinite] border-light-button dark:border-dark-button mx-auto'
        />
        <h2 className='text-zinc-900 dark:text-white mt-4'>Carganndo...</h2>
        <p className='text-zinc-600 dark:text-zinc-400'>
          Tu aventura está a punto de comenzar
        </p>
      </div>

    </>
  )
}
