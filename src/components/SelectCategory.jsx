import { CardCategory } from './CardCategory'
import { FaPaintbrush, FaCode, FaDatabase } from 'react-icons/fa6'

export function SelectCategory () {
  return (
    <>
      <div className='flex flex-col gap-10 w-full'>
        <h3 className='text-2xl md:text-3xl text-purple-600'>
          Elija una categoría para comenzar
        </h3>
        <div className='overflow-x-auto overflow-y-hidden h-[410px] p-4'>
          <div className='flex justify-between scrollbar-hide whitespace-pre lg:w-full w-[900px]'>
            <CardCategory
              category='Ciencia de datos'
              description='Descubre el poder de los datos'
              icon={<FaDatabase />}
            />
            <CardCategory
              category='Programación'
              description='Desafía tu lógica y habilidades de codificación'
              icon={<FaCode />}
            />
            <CardCategory
              category='Diseño web'
              description='Explora los fundamentos del diseño web'
              icon={<FaPaintbrush />}
            />
          </div>
        </div>
      </div>
    </>
  )
}
