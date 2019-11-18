import React from 'react'
function PersonalRecordsPage(props) {
  console.log(props.user)
  return (
    <div>
      <h1>{props.user ? 'PersonalRecords': 'You must be logged in to see your records'}</h1>
    </div>
  )
}

export default PersonalRecordsPage