import { Navbar } from '../components/Navbar.jsx'
import { GiTrophyCup } from 'react-icons/gi'
import { PlayerRow } from '../components/PlayerRow.jsx'
import { useRanking } from '../hooks/useRanking.js'
import { Loading } from '../components/Loading.jsx'
import { Footer } from '../components/Footer.jsx'
import { FaMedal } from 'react-icons/fa'

export function Ranking () {
  const { state, dispatch } = useRanking()

  return (
    <>
      <main className='flex flex-col gap-10 w-full h-full bg-light-background dark:bg-dark-background'>
        <Navbar />
        <section className='flex justify-center items-center w-full pt-10'>
          <div className='flex gap-20 w-11/12'>
            <article className='flex flex-col gap-2 dark:text-dark-text text-light-text w-1/2'>
              <div className='flex justify-between'>
                <h1 className='flex items-center gap-2 text-xl sm:text-3xl font-medium text-light-title dark:text-dark-title'><GiTrophyCup color='gold' /> Ranking</h1>

                <select className='p-1 px-2 text-base sm:text-xl text-light-buttonText bg-light-button dark:text-dark-buttonText dark:bg-dark-button rounded-lg' onChange={(e) => dispatch({ type: 'changeCategory', payload: e.target.value })} name='category'>
                  <option className='text-sm sm:text-lg rounded-lg' value='cienciaDeDatos'>Ciencia de datos</option>
                  <option className='text-sm sm:text-lg' value='diseñoWeb'>Diseño web</option>
                  <option className='text-sm sm:text-lg' value='programacion'>Programación</option>
                </select>
              </div>
              <table className='flex flex-col w-full h-[700px] bg-light-bgSecondary dark:bg-dark-bgSecondary rounded'>
                <thead>
                  <tr className='flex justify-between pt-2 px-3 text-lg text-light-title dark:text-dark-title'>
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
                      <PlayerRow
                        key={index}
                        top={index === 0 ? <FaMedal style={{ color: 'gold' }} /> : index === 1 ? <FaMedal color='silver' /> : index === 2 ? <FaMedal style={{ color: '#cd7f32' }} /> : index + 1}
                        name={puesto.usuario}
                        points={puesto.puntos}
                      />
                    ))}
                  </tbody>}
              </table>
            </article>

            <article className='flex flex-col gap-2 w-1/2'>
              <h2 className='text-xl sm:text-3xl font-medium text-light-title dark:text-dark-title'>Top Rankings</h2>
              <div className='pt-2 px-3 w-full bg-light-bgSecondary dark:bg-dark-bgSecondary rounded'>
                <h2 className='font-medium text-xl text-light-title dark:text-dark-title px-3'>Ciencia de datos</h2>
                <table className='w-full '>
                  <thead>
                    <tr className='flex justify-between text-lg text-light-title dark:text-dark-title px-3'>
                      <th>N°</th>
                      <th>Usuarios</th>
                      <th>Puntos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.topCategoryOne.map((user, index) => (
                      <PlayerRow
                        key={index}
                        top={index === 0 ? <FaMedal style={{ color: 'gold' }} /> : index === 1 ? <FaMedal color='silver' /> : index === 2 ? <FaMedal style={{ color: '#cd7f32' }} /> : index + 1}
                        name={user.usuario}
                        points={user.puntos}
                      />
                    ))}
                  </tbody>
                </table>
              </div>

              <div className='pt-2 px-3 w-full bg-light-bgSecondary dark:bg-dark-bgSecondary rounded'>
                <h2 className='font-medium text-xl px-3'>Diseño web</h2>
                <table className='w-full'>
                  <thead>
                    <tr className='flex justify-between text-xl text-light-title dark:text-dark-title px-3'>
                      <th>N°</th>
                      <th>Usuarios</th>
                      <th>Puntos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.topCategoryOne.map((user, index) => (
                      <PlayerRow
                        key={index}
                        top={index === 0 ? <FaMedal style={{ color: 'gold' }} /> : index === 1 ? <FaMedal color='silver' /> : index === 2 ? <FaMedal style={{ color: '#cd7f32' }} /> : index + 1}
                        name={user.usuario}
                        points={user.puntos}
                      />
                    ))}
                  </tbody>
                </table>
              </div>

              <div className='pt-2 px-3 w-full bg-light-bgSecondary dark:bg-dark-bgSecondary rounded'>
                <h2 className='font-medium text-xl px-3'>Programación</h2>
                <table className='w-full'>
                  <thead>
                    <tr className='flex justify-between text-xl text-light-title dark:text-dark-title px-3'>
                      <th>N°</th>
                      <th>Usuarios</th>
                      <th>Puntos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.topCategoryOne.map((user, index) => (
                      <PlayerRow
                        key={index}
                        top={index === 0 ? <FaMedal style={{ color: 'gold' }} /> : index === 1 ? <FaMedal color='silver' /> : index === 2 ? <FaMedal style={{ color: '#cd7f32' }} /> : index + 1}
                        name={user.usuario}
                        points={user.puntos}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
