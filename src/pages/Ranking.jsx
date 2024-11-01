import { Navbar } from '../components/Navbar.jsx'
import { GiTrophyCup } from 'react-icons/gi'
import { PlayerRow } from '../components/PlayerRow.jsx'
import { useRaking } from '../hooks/useRaking.js'
import { Loading } from '../components/Loading.jsx'

import { useEffect } from 'react'

export function Ranking () {
  const { loading, setRaking, changeCategory } = useRaking()

  const leaderboardData = [
    { id: 1, name: 'Juan Pérez', points: 1500, level: 10 },
    { id: 2, name: 'Ana García', points: 1400, level: 9 },
    { id: 3, name: 'Carlos Rodríguez', points: 1300, level: 8 },
    { id: 4, name: 'Sofía Martínez', points: 1200, level: 7 },
    { id: 5, name: 'Diego López', points: 1100, level: 7 }
  ]

  useEffect(() => {
    async function fetchData () {
      try {
        const response = await fetch('raking.json')
        const data = await response.json()

        setRaking(data)
        console.log(data)
      } catch (error) {
        throw new Error(error.mensage)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <main className='flex w-full h-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900'>
        <Navbar />
        <section className='flex flex-col justify-center ml-40 w-3/4 gap-20'>
          <article className='border-slate-400 bg-transparent border dark:border-slate-400 text-light-text dark:text-dark-text rounded-lg p-8 h-5/6'>
            <div className='flex justify-between'>
              <h1 className='flex items-center gap-2 text-3xl font-semibold'>Raking <GiTrophyCup /></h1>

              <select className='p-2 px-3 text-light-text dark:text-dark-text dark:bg-purple-800 font-semibold' onChange={() => changeCategory()} name='category'>
                <option value='cienciaDeDatos'>Ciencia de datos</option>
                <option value='diseñoWeb'>Diseño web</option>
                <option value='programacion'>Programación</option>
              </select>
            </div>
            <table className='flex flex-col w-full'>
              <thead>
                <tr className='flex justify-between pt-8 px-3 text-xl'>
                  <th>N°</th>
                  <th>Usuarios</th>
                  <th>Puntos</th>
                </tr>
              </thead>
              {loading

                ? <div className='pt-40'>
                  <Loading />
                </div>
                : <tbody className='text-xl'>
                  {leaderboardData.map((player, index) => (
                    <PlayerRow key={index} top={player.id} name={player.name} points={player.points} />
                  ))}
                  </tbody>}
            </table>
          </article>
        </section>
      </main>
    </>
  )
}
