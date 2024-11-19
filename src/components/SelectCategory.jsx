import { CardCategory } from './CardCategory'

export function SelectCategory () {
  return (
    <>
      <div className='flex flex-col gap-20 w-full'>
        <h3 className='text-2xl md:text-3xl text-purple-600'>
          Elija una categoría para comenzar
        </h3>
        <div className='flex gap-6 lg:gap-20 p-4 overflow-x-auto scrollbar-hide whitespace-nowrap'>
          <CardCategory
            category='Ciencia de datos'
            description='Descubre el poder de los datos'
          />
          <CardCategory
            category='Programación'
            description='Desafía tu lógica y habilidades de codificación'
          />
          <CardCategory
            category='Diseño web'
            description='Explora los fundamentos del diseño web'
          />
        </div>
      </div>
    </>
  )
}
