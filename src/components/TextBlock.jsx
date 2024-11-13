export function TextBlock ({ title, text }) {
  return (
    <>
      <article className='flex flex-col gap-8'>
        <h2 className='text-xl md:text-3xl xl:text-4xl font-bold text-purple-600'>{title}</h2>

        <p className='text-base md:text-xl xl:text-2xl text-light-text dark:text-dark-text w-4/5 font-semibold'>{text}</p>
      </article>

    </>
  )
}
