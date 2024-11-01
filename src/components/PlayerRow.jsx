export function PlayerRow ({ top, name, points }) {
  return (
    <>
      <tr className='flex justify-between p-2 pl-3 pr-3 rounded hover:bg-slate-400 hover:dark:bg-purple-800'>
        <td>{top}</td>
        <td>{name}</td>
        <td>{points}</td>
      </tr>
    </>
  )
}
