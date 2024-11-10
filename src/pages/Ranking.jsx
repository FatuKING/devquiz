import { Navbar } from '../components/Navbar.jsx'
import { GiTrophyCup } from 'react-icons/gi'
import { PlayerRow } from '../components/PlayerRow.jsx'
import { useRanking } from '../hooks/useRanking.js'
import { Loading } from '../components/Loading.jsx'

export function Ranking () {
  const { state, dispatch } = useRanking()

  return (
    <>
      <main className='flex w-full h-full bg-gradient-to-r from-slate-100 to-slate-300 dark:from-slate-900 dark:to-slate-950'>
        <Navbar />
        <section className='flex flex-col justify-center ml-40 w-3/4 gap-20'>
          <article className='bg-white/30 dark:bg-black/30 dark:text-dark-text text-light-text rounded-lg p-8 w-3/4 h-5/6 shadow shadow-black'>
            <div className='flex justify-between'>
              <h1 className='flex items-center gap-2 text-3xl font-semibold'><GiTrophyCup /> Ranking</h1>

              <select className='p-2 px-3 text-xl text-light-text bg-purple-500 dark:text-dark-text dark:bg-purple-800 font-semibold' onChange={(e) => dispatch({ type: 'changeCategory', payload: e.target.value })} name='category'>
                <option className='text-lg font-semibold' value='cienciaDeDatos'>Ciencia de datos</option>
                <option className='text-lg font-semibold' value='diseñoWeb'>Diseño web</option>
                <option className='text-lg font-semibold' value='programacion'>Programación</option>
              </select>
            </div>
            <table className='flex flex-col w-full'>
              <thead>
                <tr className='flex justify-between pt-8 px-3 text-2xl'>
                  <th>N°</th>
                  <th>Usuarios</th>
                  <th>Puntos</th>
                </tr>
              </thead>
              {state.loading

                ? <div className='pt-40'>
                  <Loading />
                </div>
                : <tbody className='text-2xl'>
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
