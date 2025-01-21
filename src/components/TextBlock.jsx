export function TextBlock ({ title, text, props }) {
  return (
    <>
      <article className={`flex flex-col gap-8 ${props}`}>
        <h2 className='text-2xl md:text-3xl font-medium text-light-title dark:text-dark-title'>{title}</h2>

        <p className='text-base md:text-xl text-light-paragraph dark:text-dark-paragraph w-[87%] sm:w-4/5'>{text}</p>
      </article>

    </>
  )
}
