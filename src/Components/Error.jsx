import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
      <h1>Opps!</h1>
      <h3>You got an error</h3>
    </div>
  )
}

export default Error
