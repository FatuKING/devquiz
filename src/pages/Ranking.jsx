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
        <section className='flex justify-center items-center w-full 2xl:pt-10'>
          <div className='flex gap-10 w-11/12'>
            <article className='flex flex-col gap-2 dark:text-dark-text text-light-text w-1/2'>
              <div className='flex justify-between'>
                <h1 className='flex items-center gap-2 text-2xl 2xl:text-3xl font-medium text-light-title dark:text-dark-title'><GiTrophyCup color='gold' /> Ranking</h1>

                <select className='p-1 px-2 text-base 2xl:text-lg text-light-buttonText bg-light-button dark:text-dark-buttonText dark:bg-dark-button rounded-lg' onChange={(e) => dispatch({ type: 'changeCategory', payload: e.target.value })} name='category'>
                  <option className='text-sm sm:text-base rounded-lg' value='cienciaDeDatos'>Ciencia de datos</option>
                  <option className='text-sm sm:text-base' value='diseñoWeb'>Diseño web</option>
                  <option className='text-sm sm:text-base' value='programacion'>Programación</option>
                </select>
              </div>
              <table className='flex flex-col w-full h-[400px] 2xl:h-[600px] bg-light-bgSecondary dark:bg-dark-bgSecondary rounded'>
                <thead>
                  <tr className='flex justify-between pt-2 px-3 text-base 2xl:text-lg text-light-title dark:text-dark-title'>
                    <th>N°</th>
                    <th>Usuarios</th>
                    <th>Puntos</th>
                  </tr>
                </thead>
                {state.loading

                  ? <div className='pt-40'>
                    <Loading />
                  </div>
                  : <tbody className='text-base overflow-x-hidden h-full text-light-title dark:text-dark-title scrollbar-custom'>
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
                    
            <article className='flex flex-col gap-4 w-3/4 text-light-title dark:text-dark-title'>
            <h2 className='text-2xl 2xl:text-3xl font-medium text-light-title dark:text-dark-title'>Top Rankings</h2>
            <div className='grid grid-cols-3 gap-4'>
              <div className='pt-2 w-full bg-light-bgSecondary dark:bg-dark-bgSecondary rounded'>
                <h2 className='font-medium text-lg 2xl:text-xl px-3 pb-2'>Ciencia de datos</h2>
                <table className='w-full '>
                  <thead>
                    <tr className='flex justify-between text-base px-3'>
                      <th>N°</th>
                      <th className='pl-3'>Usuarios</th>
                      <th>Puntos</th>
                    </tr>
                  </thead>
                  <tbody className='text-base'>
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

              <div className='pt-2 w-full bg-light-bgSecondary dark:bg-dark-bgSecondary text-light-title dark:text-dark-title rounded'>
                <h2 className='font-medium text-lg 2xl:text-xl px-3 pb-2'>Diseño web</h2>
                <table className='w-full'>
                  <thead>
                    <tr className='flex justify-between text-base px-3'>
                      <th>N°</th>
                      <th className='pl-3'>Usuarios</th>
                      <th>Puntos</th>
                    </tr>
                  </thead>
                  <tbody className='text-base'>
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

              <div className='pt-2 w-full bg-light-bgSecondary dark:bg-dark-bgSecondary text-light-title dark:text-dark-title rounded'>
                <h2 className='font-medium text-lg 2xl:text-xl px-3 pb-2'>Programación</h2>
                <table className='w-full'>
                  <thead>
                    <tr className='flex justify-between text-base px-3'>
                      <th>N°</th>
                      <th className='pl-3'>Usuarios</th>
                      <th>Puntos</th>
                    </tr>
                  </thead>
                  <tbody className='text-base'>
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
              </div>
            </article>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
