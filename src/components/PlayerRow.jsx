export function PlayerRow ({ top, name, points }) {
  return (
    <>
      <tr className='flex justify-between pt-2'>
        <td>{top}</td>
        <td>{name}</td>
        <td>{points}</td>
      </tr>
    </>
  )
}
