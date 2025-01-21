import { CardCategory } from './CardCategory'
import { FaPaintbrush, FaCode, FaDatabase } from 'react-icons/fa6'
import { TextBlock } from './TextBlock'


export function SelectCategory () {
  return (
    <>
      <div className='flex flex-col gap-10 w-full'>
        <TextBlock 
        title='Selecciona una categoría para comenzar'
        text='Cada categoria cuenta con 20 preguntas multiple choice'/>
    
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
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
    </>
  )
}
