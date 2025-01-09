import { Navbar } from '../components/Navbar.jsx'
import { GiTrophyCup } from 'react-icons/gi'
import { PlayerRow } from '../components/PlayerRow.jsx'
import { useRanking } from '../hooks/useRanking.js'
import { Loading } from '../components/Loading.jsx'
import { Footer } from '../components/Footer.jsx'

export function Ranking () {
  const { state, dispatch } = useRanking()

  return (
    <>
      <main className='flex flex-col gap-10 w-full h-full bg-light-background dark:bg-dark-background'>
        <Navbar />
        <section className='flex justify-center items-center w-full'>
          <article className='dark:text-dark-text text-light-text w-11/12'>
            <div className='flex justify-between'>
              <h1 className='flex items-center gap-2 text-xl sm:text-3xl font-medium text-light-title dark:text-dark-title'><GiTrophyCup /> Ranking</h1>

              <select className='p-1 px-2 text-base sm:text-xl text-light-buttonText bg-light-button dark:text-dark-buttonText dark:bg-dark-button rounded-lg' onChange={(e) => dispatch({ type: 'changeCategory', payload: e.target.value })} name='category'>
                <option className='text-sm sm:text-lg rounded-lg' value='cienciaDeDatos'>Ciencia de datos</option>
                <option className='text-sm sm:text-lg' value='diseñoWeb'>Diseño web</option>
                <option className='text-sm sm:text-lg' value='programacion'>Programación</option>
              </select>
            </div>
            <table className='flex flex-col w-full h-[700px]'>
              <thead>
                <tr className='flex justify-between pt-8 px-3 text-xl text-light-title dark:text-dark-title'>
                  <th>N°</th>
                  <th>Usuarios</th>
                  <th>Puntos</th>
                </tr>
              </thead>
              {state.loading

                ? <div className='pt-40'>
                  <Loading />
                </div>
                : <tbody className='text-lg overflow-x-scroll h-full text-light-title dark:text-dark-title'>
                  {state.ranking.map((puesto, index) => (
                    <PlayerRow key={index} top={puesto.puesto} name={puesto.usuario} points={puesto.puntos} />
                  ))}
                  </tbody>}
            </table>
          </article>
        </section>
        <Footer />
      </main>
    </>
  )
}
