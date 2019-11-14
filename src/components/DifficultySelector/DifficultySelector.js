import React from 'react'

function DifficultySelector({difficulty, setDifficulty}) {

  return (
    <select value={difficulty} onChange={(e)=> setDifficulty(e.target.value)}>
      <option value='easy'>Easy</option>
      <option value='medium'>Medium</option>
      <option value='hard'>Hard</option>
      <option value=''>Random</option>
    </select>

  )
}

export default DifficultySelector
