import { Navbar } from '../components/Navbar.jsx'
import { GiTrophyCup } from 'react-icons/gi'
import { PlayerRow } from '../components/PlayerRow.jsx'

export function Ranking () {
  const leaderboardData = [
    { id: 1, name: 'Juan Pérez', points: 1500, level: 10 },
    { id: 2, name: 'Ana García', points: 1400, level: 9 },
    { id: 3, name: 'Carlos Rodríguez', points: 1300, level: 8 },
    { id: 4, name: 'Sofía Martínez', points: 1200, level: 7 },
    { id: 5, name: 'Diego López', points: 1100, level: 7 }
  ]

  return (
    <>
      <Navbar />
      <main className='flex justify-center w-full h-full bg-light-background dark:bg-dark-background'>
        <section className='flex flex-col pt-20 w-3/4 gap-20'>
          <article className='bg-light-secondary/10 dark:bg-dark-secondary/10 text-light-text dark:text-dark-text rounded p-8 h-5/6'>
            <div className='flex justify-between'>
              <h1 className='flex items-center gap-2 text-3xl font-semibold text-light-accent dark:text-dark-accent'>Raking <GiTrophyCup /></h1>

              <select className='p-2 px-3 bg-light-primary text-light-text dark:bg-dark-primary dark:text-dark-text font-semibold' name='category'>
                <option value='category1'>Ciencia de datos</option>
                <option value='category2'>Diseño web</option>
                <option value='category3'>Programación</option>
              </select>
            </div>
            <table className='flex flex-col w-full'>
              <thead>
                <tr className='flex justify-between pt-4 text-light-secondary dark:text-dark-secondary text-xl'>
                  <th>N°</th>
                  <th>Usuarios</th>
                  <th>Puntos</th>
                </tr>
              </thead>
              <tbody className='text-xl'>
                {leaderboardData.map((player, index) => (
                  <PlayerRow key={index} top={player.id} name={player.name} points={player.points} />
                ))}
              </tbody>
            </table>
          </article>
        </section>
      </main>
    </>
  )
}
