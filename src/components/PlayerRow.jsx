export function PlayerRow ({ top, name, points }) {
  return (
    <>
      <tr className='flex justify-between items-center p-2 pl-3 pr-3 rounded font-medium hover:text-light-buttonText hover:bg-light-button hover:dark:bg-dark-button'>
        <td>{top}</td>
        <td>{name}</td>
        <td>{points}</td>
      </tr>
    </>
  )
}
