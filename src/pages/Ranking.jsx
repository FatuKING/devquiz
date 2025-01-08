import { Navbar } from '../components/Navbar.jsx'
import { GiTrophyCup } from 'react-icons/gi'
import { PlayerRow } from '../components/PlayerRow.jsx'
import { useRanking } from '../hooks/useRanking.js'
import { Loading } from '../components/Loading.jsx'

export function Ranking () {
  const { state, dispatch } = useRanking()

  return (
    <>
      <main className='flex flex-col w-full h-full bg-light-background dark:bg-dark-background'>
        <Navbar />
        <section className='flex justify-center items-center lg:w-full'>
          <article className='bg-white/30 dark:bg-black/30 dark:text-dark-text text-light-text rounded-lg p-8 pb-0 w-10/12 sm:w-11/12 lg:w-3/4 h-full lg:h-5/6 shadow-sm shadow-black dark:shadow-purple-800'>
            <div className='flex justify-between'>
              <h1 className='flex items-center gap-2 text-xl sm:text-3xl font-semibold'><GiTrophyCup /> Ranking</h1>

              <select className='p-1 px-2 text-base sm:text-xl text-light-text bg-purple-500 dark:text-dark-text dark:bg-purple-800 font-semibold rounded-lg' onChange={(e) => dispatch({ type: 'changeCategory', payload: e.target.value })} name='category'>
                <option className='text-sm sm:text-lg font-semibold rounded-lg' value='cienciaDeDatos'>Ciencia de datos</option>
                <option className='text-sm sm:text-lg font-semibold' value='diseñoWeb'>Diseño web</option>
                <option className='text-sm sm:text-lg font-semibold' value='programacion'>Programación</option>
              </select>
            </div>
            <table className='flex flex-col w-full h-[800px] lg:h-[88%]'>
              <thead>
                <tr className='flex justify-between pt-8 px-3 text-xl sm:text-2xl'>
                  <th>N°</th>
                  <th>Usuarios</th>
                  <th>Puntos</th>
                </tr>
              </thead>
              {state.loading

                ? <div className='pt-40'>
                  <Loading />
                </div>
                : <tbody className='text-lg sm:text-xl overflow-auto'>
                  {state.ranking.map((puesto, index) => (
                    <PlayerRow key={index} top={puesto.puesto} name={puesto.usuario} points={puesto.puntos} />
                  ))}
                  </tbody>}
            </table>
          </article>
        </section>
      </main>
    </>
  )
}
